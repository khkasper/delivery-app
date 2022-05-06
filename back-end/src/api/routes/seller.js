const express = require('express');
const { SellerController } = require('../../controllers');

const router = express.Router();

router.get('/', SellerController.getAll);

module.exports = router;
