const MD5 = require('md5');
const { User } = require('../database/models');
const { CONFLICT, UNAUTHORIZED } = require('../utils/statusCodes');
const { registeredUser, invalidUser } = require('../utils/statusMessages');
const { HttpError } = require('../utils');

const getAll = async ({ email }) => {
  const { role } = User.findOne({ where: { email } });

  if (role !== 'administrator') throw new HttpError(UNAUTHORIZED, invalidUser);

  const users = await User.findAll();
  return users;
};

const create = async (body, userInfo) => {
  const { name, email, password, role } = body;
  const adminEmail = userInfo.email;
  const { role: adminRole } = await User.findOne({ where: { email: adminEmail } });

  if (adminRole !== 'administrator') throw new HttpError(UNAUTHORIZED, invalidUser);

  const passwordCripto = MD5(password);
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) throw new HttpError(CONFLICT, registeredUser);

  const user = await User.create({ name, email, password: passwordCripto, role });
  return user;
};

const update = async (body, userInfo) => {
  const { name, email, password, role } = body;
  const { email: adminEmail } = userInfo;
  const { role: adminRole } = await User.findOne({ where: { email: adminEmail } });

  if (adminRole !== 'administrator') throw new HttpError(UNAUTHORIZED, invalidUser);

  const passwordCripto = MD5(password);
  const user = await User.findOneAndUpdate(
    { name, email, password: passwordCripto, role },
    { where: { email } },
  );
  return user;
};

const remove = async (body, userInfo) => {
  const { email } = body;
  const { email: adminEmail } = userInfo;
  const { role: adminRole } = await User.findOne({ where: { email: adminEmail } });

  if (adminRole !== 'administrator') throw new HttpError(UNAUTHORIZED, invalidUser);

  const user = await User.destroy({ where: { email } });
  return user;
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
