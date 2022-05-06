const rescue = require('express-rescue');
const { CheckoutService } = require('../services');
const { CREATED } = require('../utils/statusCodes');

const create = rescue(async (req, res) => {
  const { body } = req;
  const sale = await CheckoutService.create(body);
  return res.status(CREATED).json(sale);
});

module.exports = { create };
