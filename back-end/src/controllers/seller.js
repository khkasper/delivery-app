const rescue = require('express-rescue');
const { SellerService } = require('../services');

const getAll = rescue(async (_req, res) => {
  const sellers = await SellerService.getAll();
  return res.status(200).json(sellers);
});

module.exports = { getAll };
