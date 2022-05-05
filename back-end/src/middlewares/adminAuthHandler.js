const rescue = require('express-rescue');
const { HttpError } = require('../utils');
const { UNAUTHORIZED } = require('../utils/statusCodes');
const { invalidUser } = require('../utils/statusMessages');

module.exports = rescue(async (req, _res, next) => {
  const { role } = req.userInfo;
  console.log(role);

  if (role !== 'administrator') throw new HttpError(UNAUTHORIZED, invalidUser);

  next();
});
