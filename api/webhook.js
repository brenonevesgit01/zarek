const crypto = require('crypto');
const { withDb } = require('../lib/db.js');

module.exports.config = { api: { bodyParser: false } };

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function constantTimeHexEqual(a, b) {
  try {
    const bufA = Buffer.from(a, 'hex');
    const bufB = Buffer.from(b, 'hex');
    if (bufA.length !== bufB.length || bufA.length === 0) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

function verifySignature(rawBody, headers, secret) {
  if (!secret) return false;
  const candidates = [
    headers['whop-signature'],
    headers['x-whop-signature'],
    headers['svix-signature'],
    headers['webhook-signature']
  ].filter(Boolean);
  if (candidates.length === 0) return false;

  const computed = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  for (const header of candidates) {
    const parts = String(header).split(',').map(s => s.trim());
    for (const part of parts) {
      const eq = part.indexOf('=');
      const provided = eq >= 0 ? part.slice(eq + 1) : part;
      if (constantTimeHexEqual(provided, computed)) return true;
    }
  }
  return false;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let rawBody;
  try {
    rawBody = await readRawBody(req);
  } catch (err) {
    console.error('Failed to read webhook body:', err);
    return res.status(400).json({ error: 'Could not read body' });
  }

  const secret = process.env.WHOP_WEBHOOK_SECRET;
  const valid = verifySignature(rawBody, req.headers, secret);
  if (!valid) {
    console.warn('Webhook signature invalid or missing. Header webhook-id:', req.headers['webhook-id']);
    return res.status(401).json({ error: 'Invalid signature' });
  }

  let body;
  try {
    body = JSON.parse(rawBody.toString('utf8'));
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const action = body.action || body.event || body.type || '';
  const data = body.data || {};
  const webhookId = req.headers['webhook-id'] || req.headers['svix-id'] || null;

  if (!String(action).toLowerCase().includes('payment') || !String(action).toLowerCase().includes('succeed')) {
    return res.status(200).json({ ok: true, ignored: action });
  }

  const paymentId = data.id || data.payment_id;
  if (!paymentId) {
    console.warn('Payment event without payment id:', body);
    return res.status(200).json({ ok: true, skipped: 'missing payment_id' });
  }

  const amount = Number(data.total ?? data.amount ?? 0);
  const currency = (data.currency || 'usd').toLowerCase();
  const email = data.user?.email || data.email || data.metadata?.email || '';
  const name = data.user?.name || data.user?.username || '';
  const productName = data.metadata?.product_name || data.product?.title || data.plan?.title || '';
  const sku = data.metadata?.sku || null;
  let itemsJson = null;
  if (data.metadata?.items) {
    try { itemsJson = JSON.parse(data.metadata.items); } catch { itemsJson = data.metadata.items; }
  }

  try {
    await withDb(async (sql) => {
      if (webhookId) {
        const dup = await sql`SELECT id FROM orders WHERE webhook_id = ${webhookId} LIMIT 1`;
        if (dup.length) return;
      }
      await sql`INSERT INTO orders (
        payment_id, webhook_id, customer_email, customer_name,
        product_name, sku, items_json, amount, currency, status
      ) VALUES (
        ${paymentId}, ${webhookId}, ${email}, ${name},
        ${productName}, ${sku}, ${itemsJson ? JSON.stringify(itemsJson) : null},
        ${amount}, ${currency}, 'pending'
      )
      ON CONFLICT (payment_id) DO NOTHING`;
    });
  } catch (err) {
    console.error('Webhook DB insert error:', err);
    return res.status(500).json({ error: 'Database error' });
  }

  return res.status(200).json({ ok: true });
};
