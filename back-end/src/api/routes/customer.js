const express = require('express');
const { ProductController } = require('../../controllers');

const router = express.Router();

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getById);

module.exports = router;
