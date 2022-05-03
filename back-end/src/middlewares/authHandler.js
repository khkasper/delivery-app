const { JwtToken, HttpError } = require('../utils');
const { UNAUTHORIZED } = require('../utils/statusCodes');
const { invalidToken, tokenNotFound } = require('../utils/statusMessages');

const authHandler = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw new HttpError(UNAUTHORIZED, tokenNotFound);

  const verifiedToken = JwtToken.verify(authorization);

  if (!verifiedToken) throw new HttpError(UNAUTHORIZED, invalidToken);

  const { email, role } = verifiedToken;
  req.userInfo = { email, role };

  next();
};

module.exports = { authHandler };
