const express = require('express');
const { ProductController } = require('../../controllers');

const router = express.Router();

router.get('/products', ProductController.getAll);

module.exports = router;
