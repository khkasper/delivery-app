const rescue = require('express-rescue');
const { UserService } = require('../services');

const create = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const userInfo = await UserService.create(name, email, password);
  return res.status(201).json(userInfo);
});

module.exports = { create };
