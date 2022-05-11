const MD5 = require('md5');
const { User } = require('../database/models');
const { HttpError, JwtToken } = require('../utils');
const { CONFLICT } = require('../utils/statusCodes');
const { registeredUser } = require('../utils/statusMessages');

const create = async (name, email, password) => {
  const user = await User.findOne({ where: { email } });

  if (user) throw new HttpError(CONFLICT, registeredUser);

  const encryptedPass = MD5(password);
  const newUser = await User.create({ name, email, password: encryptedPass, role: 'customer' });
  const { id, role } = newUser;
  const token = JwtToken.generate({ id, email, role });
  return { ...newUser.dataValues, token };
};

module.exports = { create };
