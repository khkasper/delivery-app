const express = require('express');
const { SellerController, SaleController } = require('../../controllers');

const router = express.Router();

router.get('/', SellerController.getAll);
router.get('/orders', SaleController.getAllBySellerId);
router.get('/orders/:id', SaleController.getById);

module.exports = router;
