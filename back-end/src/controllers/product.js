const rescue = require('express-rescue');
const { ProductService } = require('../services');

const getAll = rescue(async (_req, res) => {
  const products = await ProductService.getAll();
  return res.status(200).json(products);
});

module.exports = { getAll };
