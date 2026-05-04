const { withDb } = require('../lib/db.js');
const { requireAdmin } = require('../lib/auth.js');
const { extractOrderFields } = require('../lib/order-mapper.js');

module.exports = async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.WHOP_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'WHOP_API_KEY not configured' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }
  const orderId = Number(body?.order_id);
  if (!orderId) return res.status(400).json({ error: 'order_id is required' });

  let order;
  try {
    order = await withDb(async (sql) => {
      const rows = await sql`SELECT * FROM orders WHERE id = ${orderId} LIMIT 1`;
      return rows[0] || null;
    });
  } catch (err) {
    console.error('Order lookup error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
  if (!order) return res.status(404).json({ error: 'Order not found' });

  let enriched = null;
  try {
    const r = await fetch(`https://api.whop.com/api/v1/payments/${order.payment_id}`, {
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Accept': 'application/json' }
    });
    if (!r.ok) {
      const text = await r.text().catch(() => '');
      return res.status(502).json({
        error: 'Whop API rejected the lookup',
        status: r.status,
        details: text.slice(0, 300)
      });
    }
    enriched = await r.json();
  } catch (err) {
    console.error('Whop fetch failed:', err);
    return res.status(502).json({ error: 'Could not reach Whop API' });
  }

  let fallback = {};
  try {
    fallback = order.raw_payload?.webhook?.data || {};
  } catch {}

  const fields = extractOrderFields(enriched, fallback);
  const newRaw = { webhook: order.raw_payload?.webhook || null, enriched };

  try {
    await withDb(async (sql) => {
      await sql`UPDATE orders SET
        customer_email = ${fields.email},
        customer_name = ${fields.name},
        product_name = ${fields.productName},
        sku = ${fields.sku},
        items_json = ${fields.items ? JSON.stringify(fields.items) : null},
        amount = ${fields.amount},
        currency = ${fields.currency},
        raw_payload = ${JSON.stringify(newRaw)}
        WHERE id = ${orderId}`;
    });
  } catch (err) {
    console.error('Order update error:', err);
    return res.status(500).json({ error: 'Database update failed', details: err.message });
  }

  return res.status(200).json({ ok: true, fields });
};
