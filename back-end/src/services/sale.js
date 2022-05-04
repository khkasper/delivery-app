const { Sale } = require('../database/models');

const getAll = async () => Sale.findAll();

const getById = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  return sale;
};

module.exports = { getAll, getById };
