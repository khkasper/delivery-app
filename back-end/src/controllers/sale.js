const rescue = require('express-rescue');
const { SaleService } = require('../services');
const { OK } = require('../utils/statusCodes');

const getAllByCustomerId = rescue(async (req, res) => {
  const { userInfo } = req;
  const sales = await SaleService.getAllByCustomerId(userInfo);
  return res.status(OK).json(sales);
});

const getAllBySellerId = rescue(async (req, res) => {
  const { userInfo } = req;
  const sales = await SaleService.getAllBySellerId(userInfo);
  return res.status(OK).json(sales);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.getById(id);
  return res.status(OK).json(sale);
});

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { newStatus } = req.body;
  const sale = await SaleService.update(id, newStatus);
  return res.status(OK).json(sale);
});

module.exports = { getAllByCustomerId, getAllBySellerId, getById, update };
