const rescue = require('express-rescue');
const { LoginService } = require('../services');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const loginInfo = await LoginService.login(email, password);
  return res.status(200).json(loginInfo);
});

module.exports = { login };
