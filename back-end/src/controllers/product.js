const rescue = require('express-rescue');
const { ProductService } = require('../services');
const { OK } = require('../utils/statusCodes');

const getAll = rescue(async (_req, res) => {
  const products = await ProductService.getAll();
  return res.status(OK).json(products);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await ProductService.getById(id);
  return res.status(OK).json(product);
});

module.exports = { getAll, getById };
