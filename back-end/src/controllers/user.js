const rescue = require('express-rescue');
const { UserService } = require('../services');
const { CREATED } = require('../utils/statusCodes');

const create = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const userInfo = await UserService.create(name, email, password);
  return res.status(CREATED).json(userInfo);
});

module.exports = { create };
