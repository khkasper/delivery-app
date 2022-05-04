const { Sale } = require('../database/models');

const getAll = async () => Sale.findAll();

const getById = async (id) => {
  const order = await Sale.findOne({ where: { id } });
  return order;
};

module.exports = { getAll, getById };
