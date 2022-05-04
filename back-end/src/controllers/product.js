const rescue = require('express-rescue');
const { ProductService } = require('../services');

const getAll = rescue(async (_req, res) => {
  const products = await ProductService.getAll();
  return res.status(200).json(products);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await ProductService.getById(id);
  return res.status(200).json(product);
});

module.exports = { getAll, getById };
