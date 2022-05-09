const { Sale } = require('../database/models');

const getAllByCustomerId = async ({ id }) => Sale.findAll({ where: { userId: id } });

const getAllBySellerId = async ({ id }) => Sale.findAll({ where: { sellerId: id } });

const getById = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  return sale;
};

module.exports = { getAllByCustomerId, getAllBySellerId, getById };
