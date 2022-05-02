import * as rescue from 'express-rescue';
import LoginService from '../services/login';

const loginController = rescue(async (req, res) => {
  const { email, password } = req.body;
  const loginInfo = await LoginService.login(email, password);
  return res.status(200).json(loginInfo);
});
