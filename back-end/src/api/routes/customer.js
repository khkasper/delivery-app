const express = require('express');
const { ProductController, SaleController, CheckoutController } = require('../../controllers');

const router = express.Router();

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getById);
router.get('/orders', SaleController.getAll);
router.get('/orders/details/:id', SaleController.getById);
router.post('/checkout', CheckoutController.create);

module.exports = router;
