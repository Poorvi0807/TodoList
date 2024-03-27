const jwt = require("jsonwebtoken");
require('dotenv').config();
const Secret_key  = process.env.Secret_key;
console.log(process.env.Secret_key);

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: 'Unauthorized - Token not provided' });
  }

  jwt.verify(token, Secret_key, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden - Invalid token', msg: err });
    }
    req.user = user;
    next();
  });
};
