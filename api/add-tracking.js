const { withDb } = require('../lib/db.js');
const { requireAdmin } = require('../lib/auth.js');

const WHOP_SHIPMENTS = 'https://api.whop.com/api/v1/shipments';

module.exports = async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.WHOP_API_KEY;
  const companyId = process.env.WHOP_COMPANY_ID;
  if (!apiKey) return res.status(500).json({ error: 'WHOP_API_KEY not configured' });
  if (!companyId) return res.status(500).json({ error: 'WHOP_COMPANY_ID not configured' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }

  const orderId = Number(body?.order_id);
  const trackingCode = String(body?.tracking_code || '').trim();
  if (!orderId || !trackingCode) {
    return res.status(400).json({ error: 'order_id and tracking_code are required' });
  }

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

  let whopResp, whopJson;
  try {
    whopResp = await fetch(WHOP_SHIPMENTS, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company_id: companyId,
        payment_id: order.payment_id,
        tracking_code: trackingCode
      })
    });
    whopJson = await whopResp.json();
  } catch (err) {
    console.error('Whop shipments fetch failed:', err);
    return res.status(502).json({ error: 'Failed to reach Whop API' });
  }

  if (!whopResp.ok) {
    console.error('Whop shipments error:', whopResp.status, whopJson);
    return res.status(502).json({ error: 'Whop API rejected the shipment', details: whopJson });
  }

  const shipmentId = whopJson.id || null;
  const carrier = whopJson.carrier || null;
  const deliveryEstimate = whopJson.delivery_estimate || null;

  try {
    await withDb(async (sql) => {
      await sql`UPDATE orders SET
        status = 'shipped',
        tracking_code = ${trackingCode},
        shipment_id = ${shipmentId},
        carrier = ${carrier},
        delivery_estimate = ${deliveryEstimate},
        shipped_at = now()
        WHERE id = ${orderId}`;
    });
  } catch (err) {
    console.error('Order update error:', err);
    return res.status(500).json({ error: 'Tracking saved on Whop but DB update failed', details: err.message });
  }

  return res.status(200).json({
    ok: true,
    shipment_id: shipmentId,
    carrier,
    delivery_estimate: deliveryEstimate,
    tracking_code: trackingCode
  });
};
