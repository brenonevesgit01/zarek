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

function safeStrEqual(a, b) {
  try {
    const bufA = Buffer.from(String(a), 'utf8');
    const bufB = Buffer.from(String(b), 'utf8');
    if (bufA.length !== bufB.length || bufA.length === 0) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

function buildSecretCandidates(secret) {
  const out = [Buffer.from(secret, 'utf8')];
  const prefixHex = secret.match(/^[a-z]+_([a-f0-9]+)$/i);
  if (prefixHex && prefixHex[1].length % 2 === 0) {
    try { out.push(Buffer.from(prefixHex[1], 'hex')); } catch {}
  }
  const whsec = secret.match(/^whsec_(.+)$/);
  if (whsec) {
    try { out.push(Buffer.from(whsec[1], 'base64')); } catch {}
  }
  return out;
}

function parseStructuredSig(headerValue) {
  const out = { t: null, sigs: [] };
  String(headerValue).split(',').forEach(part => {
    const eq = part.indexOf('=');
    if (eq < 0) return;
    const k = part.slice(0, eq).trim();
    const v = part.slice(eq + 1).trim();
    if (k === 't') out.t = v;
    else out.sigs.push({ scheme: k, value: v });
  });
  return out;
}

function verifySignature(rawBody, headers, secret) {
  if (!secret) return false;
  const sigHeaders = [
    headers['x-whop-signature'],
    headers['whop-signature'],
    headers['svix-signature'],
    headers['webhook-signature']
  ].filter(Boolean);
  if (sigHeaders.length === 0) return false;

  const secretCandidates = buildSecretCandidates(secret);
  const bodyStr = rawBody.toString('utf8');

  for (const sigHeader of sigHeaders) {
    const parsed = parseStructuredSig(sigHeader);
    if (parsed.t && parsed.sigs.length > 0) {
      const signedPayload = `${parsed.t}.${bodyStr}`;
      for (const secretBuf of secretCandidates) {
        const hex = crypto.createHmac('sha256', secretBuf).update(signedPayload).digest('hex');
        const b64 = crypto.createHmac('sha256', secretBuf).update(signedPayload).digest('base64');
        for (const sig of parsed.sigs) {
          if (safeStrEqual(sig.value.toLowerCase(), hex)) return true;
          if (safeStrEqual(sig.value, b64)) return true;
        }
      }
    }
  }

  const id = headers['webhook-id'] || headers['svix-id'] || '';
  const ts = headers['webhook-timestamp'] || headers['svix-timestamp'] || '';
  const fallbackContents = [
    rawBody,
    Buffer.from(`${id}.${ts}.${bodyStr}`, 'utf8'),
    Buffer.from(`${ts}.${bodyStr}`, 'utf8'),
    Buffer.from(`${id}.${bodyStr}`, 'utf8')
  ];
  for (const sigHeader of sigHeaders) {
    const parts = String(sigHeader).split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
    for (const part of parts) {
      const eq = part.indexOf('=');
      const provided = eq >= 0 ? part.slice(eq + 1) : part;
      for (const content of fallbackContents) {
        for (const secretBuf of secretCandidates) {
          for (const enc of ['hex', 'base64', 'base64url']) {
            const computed = crypto.createHmac('sha256', secretBuf).update(content).digest(enc);
            if (safeStrEqual(provided, computed)) return true;
            if (enc === 'hex' && safeStrEqual(provided.toLowerCase(), computed)) return true;
          }
        }
      }
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
    console.warn('Webhook signature INVALID. webhook-id:', req.headers['webhook-id'] || req.headers['x-whop-signature']);
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
  const currency = (data.currency || 'gbp').toLowerCase();
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
