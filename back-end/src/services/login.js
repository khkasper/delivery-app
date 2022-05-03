const MD5 = require('md5');
const { User } = require('../database/models');
const { JwtToken, HttpError } = require('../utils');
const { BAD_REQUEST } = require('../utils/statusCodes');
const { invalidMailorPass } = require('../utils/statusMessages');

const login = async (email, password) => {
  const encryptedPass = MD5(password);
  const user = await User.findOne({ where: { email, password: encryptedPass } });

  if (!user) throw new HttpError(BAD_REQUEST, invalidMailorPass);

  const { id, name, role } = user;
  const token = JwtToken.generate({ email, role });
  return { id, name, email, role, token };
};

module.exports = { login };
