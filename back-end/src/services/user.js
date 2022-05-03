const MD5 = require('md5');
const { User } = require('../database/models');
const { HttpError } = require('../utils');
const { CONFLICT } = require('../utils/statusCodes');
const { registeredUser } = require('../utils/statusMessages');

const create = async (name, email, password) => {
  const user = await User.findOne({ where: { email } });

  if (user) throw new HttpError(CONFLICT, registeredUser);

  const encryptedPass = MD5(password);
  const newUser = await User.create({ name, email, password: encryptedPass, role: 'customer' });
  return newUser;
};

module.exports = { create };
