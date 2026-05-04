const { withDb } = require('../lib/db.js');
const { requireAdmin } = require('../lib/auth.js');

module.exports = async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const status = (req.query?.status || '').toLowerCase();
  try {
    const result = await withDb(async (sql) => {
      let rows;
      if (['pending', 'shipped', 'delivered'].includes(status)) {
        rows = await sql`SELECT * FROM orders WHERE status = ${status} ORDER BY created_at DESC LIMIT 500`;
      } else {
        rows = await sql`SELECT * FROM orders ORDER BY created_at DESC LIMIT 500`;
      }
      const counts = await sql`
        SELECT
          COUNT(*) AS total,
          COUNT(*) FILTER (WHERE status = 'pending') AS pending,
          COUNT(*) FILTER (WHERE status = 'shipped') AS shipped,
          COUNT(*) FILTER (WHERE status = 'delivered') AS delivered
        FROM orders
      `;
      return { orders: rows, counts: counts[0] };
    });
    return res.status(200).json(result);
  } catch (err) {
    console.error('admin-orders error:', err);
    return res.status(500).json({ error: err.message || 'Database error' });
  }
};
