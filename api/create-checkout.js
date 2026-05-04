const WHOP_API = 'https://api.whop.com/api/v5/checkout_configurations';
const COMPANY_ID = 'biz_zPgX8VzCxGKblf';
const DISCOUNT_TIERS = [
  { threshold: 100, pct: 10 },
  { threshold: 200, pct: 15 },
  { threshold: 300, pct: 20 }
];

function computeTotal(items) {
  const sub = items.reduce((s, i) => s + Number(i.price) * Number(i.qty || 1), 0);
  let pct = 0;
  for (const t of DISCOUNT_TIERS) if (sub >= t.threshold) pct = t.pct;
  const discount = sub * pct / 100;
  return {
    subtotal: Math.round(sub * 100) / 100,
    discountPct: pct,
    discountAmount: Math.round(discount * 100) / 100,
    total: Math.round((sub - discount) * 100) / 100
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.WHOP_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'WHOP_API_KEY not configured on server' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON body' }); }
  }

  const items = Array.isArray(body?.items) ? body.items : null;
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'items array is required and must not be empty' });
  }

  for (const it of items) {
    if (typeof it.price !== 'number' || it.price <= 0) {
      return res.status(400).json({ error: 'each item needs a positive numeric price' });
    }
  }

  const totals = computeTotal(items);
  if (totals.total <= 0) {
    return res.status(400).json({ error: 'computed total must be greater than zero' });
  }

  const itemCount = items.reduce((s, i) => s + Number(i.qty || 1), 0);
  const planTitle = items.length === 1
    ? `Zarek — ${items[0].name}`
    : `Zarek Order — ${itemCount} item${itemCount > 1 ? 's' : ''}`;

  const returnUrl = body.return_url || 'https://zarekk.shop/sucesso.html';

  const payload = {
    plan: {
      company_id: COMPANY_ID,
      initial_price: totals.total,
      currency: 'usd',
      plan_type: 'one_time',
      title: planTitle,
      visibility: 'hidden',
      product: {
        title: 'Streetwear Collection',
        external_identifier: 'streetwear-collection',
        collect_shipping_address: true,
        visibility: 'hidden'
      }
    },
    redirect_url: returnUrl,
    metadata: {
      subtotal: String(totals.subtotal),
      discount_pct: String(totals.discountPct),
      discount_amount: String(totals.discountAmount),
      total: String(totals.total),
      item_count: String(itemCount),
      items: JSON.stringify(items.map(i => ({
        id: i.id || null,
        name: i.name || '',
        sku: i.sku || null,
        color: i.color || null,
        size: i.size || null,
        qty: Number(i.qty || 1),
        price: Number(i.price)
      })))
    }
  };

  let whopResp, whopJson;
  try {
    whopResp = await fetch(WHOP_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    whopJson = await whopResp.json();
  } catch (err) {
    console.error('Whop API request failed:', err);
    return res.status(502).json({ error: 'Failed to reach Whop API' });
  }

  if (!whopResp.ok) {
    console.error('Whop API error:', whopResp.status, whopJson);
    return res.status(502).json({
      error: 'Whop API returned an error',
      status: whopResp.status,
      details: whopJson
    });
  }

  const checkoutUrl = whopJson.purchase_url || whopJson.checkout_url || whopJson.url;
  if (!checkoutUrl) {
    console.error('Whop response missing purchase_url:', whopJson);
    return res.status(502).json({ error: 'Whop response missing checkout URL', details: whopJson });
  }

  return res.status(200).json({
    checkout_url: checkoutUrl,
    total: totals.total,
    subtotal: totals.subtotal,
    discount_pct: totals.discountPct,
    discount_amount: totals.discountAmount
  });
};
