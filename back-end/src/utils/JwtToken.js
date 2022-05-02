import { readFileSync } from 'fs';
import { sign, verify } from 'jsonwebtoken';

const jwtSecret = readFileSync('./jwt.evaluation.key');
const jwtConfig = { expiresIn: '1m', algorithm: 'HS256' };

const JwtToken = {
  generate(user) {
    return sign(user, jwtSecret, jwtConfig);
  },
  verify(token) {
    return verify(token, jwtSecret);
  },
};

export default JwtToken;
