const jwt = require('jsonwebtoken');

const genToken = (payload) => {
  return jwt.sign(payload, 'p3ng4man');
};

const verifToken = (token) => {
  return jwt.verify(token, 'p3ng4man');
};

module.exports = { genToken, verifToken };
