const express = require('express');
const { LoginController } = require('../../controllers');
const { validate } = require('../../middlewares');
const { login } = require('../../schemas');

const router = express.Router();

router.post('/', validate(login), LoginController.login);

module.exports = router;
