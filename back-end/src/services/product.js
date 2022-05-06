const { Product } = require('../database/models');

const getAll = async () => Product.findAll();

const getById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  return product;
};

module.exports = { getAll, getById };
