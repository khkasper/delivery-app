const { readFileSync } = require('fs');
const { sign, verify } = require('jsonwebtoken');

const jwtSecret = readFileSync('./jwt.evaluation.key');
const jwtConfig = { expiresIn: '30d', algorithm: 'HS256' };

const JwtToken = {
  generate: (user) => sign(user, jwtSecret, jwtConfig),
  verify: (token) => verify(token, jwtSecret),
};

module.exports = JwtToken;
