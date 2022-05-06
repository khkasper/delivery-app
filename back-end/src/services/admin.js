const MD5 = require('md5');
const { User } = require('../database/models');
const { CONFLICT } = require('../utils/statusCodes');
const { registeredUser } = require('../utils/statusMessages');
const { HttpError } = require('../utils');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const create = async (body) => {
  const { name, email, password, role } = body;
  const passwordCripto = MD5(password);
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) throw new HttpError(CONFLICT, registeredUser);

  const user = await User.create({ name, email, password: passwordCripto, role });
  return user;
};

const update = async (body) => {
  const { name, email, password, role } = body;
  const passwordCripto = MD5(password);
  const user = await User.findOneAndUpdate(
    { name, email, password: passwordCripto, role },
    { where: { email } },
  );
  return user;
};

const remove = async (body) => {
  const { email } = body;
  const user = await User.destroy({ where: { email } });
  console.log(user);
  return user;
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
