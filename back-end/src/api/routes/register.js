const express = require('express');
const { UserController } = require('../../controllers');
const { validate } = require('../../middlewares');
const { user } = require('../../schemas');

const router = express.Router();

router.post('/', validate(user), UserController.create);

module.exports = router;
