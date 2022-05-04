const rescue = require('express-rescue');
const { OrderService } = require('../services');

const getAll = rescue(async (_req, res) => {
  const orders = await OrderService.getAll();
  return res.status(200).json(orders);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const order = await OrderService.getById(id);
  return res.status(200).json(order);
});

module.exports = { getAll, getById };
