const rescue = require('express-rescue');
const { SaleService } = require('../services');
const { OK } = require('../utils/statusCodes');

const getAll = rescue(async (_req, res) => {
  const sales = await SaleService.getAll();
  return res.status(OK).json(sales);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.getById(id);
  return res.status(OK).json(sale);
});

module.exports = { getAll, getById };
