const rescue = require('express-rescue');
const { AdminService } = require('../services');
const { OK, CREATED, NO_CONTENT } = require('../utils/statusCodes');

const getAll = rescue(async (req, res) => {
  const { userInfo } = req;
  const users = await AdminService.getAll(userInfo);
  return res.status(OK).json(users);
});

const create = rescue(async (req, res) => {
  const { body, userInfo } = req;
  const user = await AdminService.create(body, userInfo);
  return res.status(CREATED).json(user);
});

const update = rescue(async (req, res) => {
  const { body, userInfo } = req;
  const user = await AdminService.update(body, userInfo);
  return res.status(OK).json(user);
});

const remove = rescue(async (req, res) => {
  const { body, userInfo } = req;
  const user = await AdminService.remove(body, userInfo);
  return res.status(NO_CONTENT).json(user);
});

module.exports = {
  getAll,
  create,
  update,
  remove,
};
