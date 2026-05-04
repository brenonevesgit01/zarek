function pickValue(...vals) {
  for (const v of vals) {
    if (v == null) continue;
    if (typeof v === 'string' && v.trim() === '') continue;
    if (typeof v === 'number' && v === 0) continue;
    return v;
  }
  return null;
}

function parseItems(raw) {
  if (!raw) return null;
  try {
    if (typeof raw === 'string') return JSON.parse(raw);
    if (Array.isArray(raw)) return raw;
    return null;
  } catch {
    return null;
  }
}

function extractOrderFields(enriched, fallback) {
  const src = enriched || {};
  const fb = fallback || {};
  const items = parseItems(src.metadata?.items) || parseItems(fb.metadata?.items);
  const firstItemName = items?.[0]?.name;
  const firstItemSku = items?.[0]?.sku || items?.[0]?.id;

  const amount = Number(pickValue(src.total, src.subtotal, src.amount_after_fees, fb.total, fb.amount) || 0);
  const currency = (pickValue(src.currency, fb.currency, 'gbp') || 'gbp').toString().toLowerCase();
  const email = pickValue(src.user?.email, fb.user?.email, fb.email, src.metadata?.email, fb.metadata?.email) || '';
  const name = pickValue(
    src.billing_address?.name,
    src.user?.name,
    src.user?.username,
    fb.user?.name,
    fb.user?.username
  ) || '';
  const productName = pickValue(
    firstItemName,
    src.product?.title,
    src.plan?.title,
    src.plan?.internal_notes,
    fb.metadata?.product_name,
    fb.product?.title,
    fb.plan?.title
  ) || '';
  const sku = pickValue(firstItemSku, src.metadata?.sku, fb.metadata?.sku);

  return { amount, currency, email, name, productName, sku, items };
}

module.exports = { extractOrderFields };
