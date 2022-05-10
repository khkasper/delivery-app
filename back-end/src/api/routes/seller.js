const express = require('express');
const { SellerController, SaleController } = require('../../controllers');

const router = express.Router();

router.get('/', SellerController.getAll);
router.get('/orders', SaleController.getAllBySellerId);

module.exports = router;
