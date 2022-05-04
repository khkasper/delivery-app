const express = require('express');
const { ProductController, OrderController } = require('../../controllers');

const router = express.Router();

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getById);
router.get('/orders', OrderController.getAll);
router.get('/orders/:id', OrderController.getById);

module.exports = router;
