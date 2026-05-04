const { neon } = require('@neondatabase/serverless');

let _sql = null;
let _initPromise = null;

function getConnectionString() {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_PRISMA_URL ||
    null
  );
}

function getSql() {
  if (_sql) return _sql;
  const conn = getConnectionString();
  if (!conn) throw new Error('No Postgres connection string in env (DATABASE_URL or POSTGRES_URL)');
  _sql = neon(conn);
  return _sql;
}

async function ensureSchema() {
  if (_initPromise) return _initPromise;
  _initPromise = (async () => {
    const sql = getSql();
    await sql`CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      payment_id TEXT UNIQUE NOT NULL,
      webhook_id TEXT UNIQUE,
      customer_email TEXT NOT NULL,
      customer_name TEXT,
      product_name TEXT,
      sku TEXT,
      items_json JSONB,
      amount NUMERIC(10,2) NOT NULL,
      currency TEXT DEFAULT 'gbp',
      status TEXT DEFAULT 'pending',
      tracking_code TEXT,
      shipment_id TEXT,
      carrier TEXT,
      delivery_estimate TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT now(),
      shipped_at TIMESTAMPTZ
    )`;
    await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS raw_payload JSONB`;
    await sql`ALTER TABLE orders ALTER COLUMN customer_email DROP NOT NULL`;
    await sql`CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status)`;
    await sql`CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC)`;
  })().catch(err => {
    _initPromise = null;
    throw err;
  });
  return _initPromise;
}

async function withDb(fn) {
  await ensureSchema();
  return fn(getSql());
}

module.exports = { getSql, ensureSchema, withDb };
