const { clearSessionCookie } = require('../lib/auth.js');

module.exports = async function handler(req, res) {
  clearSessionCookie(res);
  if (req.method === 'GET') {
    res.writeHead(302, { Location: '/admin/login.html' });
    return res.end();
  }
  return res.status(200).json({ ok: true });
};
