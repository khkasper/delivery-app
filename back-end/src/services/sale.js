const { Sale, Product, User } = require('../database/models');

const getAllByCustomerId = async ({ id }) => Sale.findAll({ where: { userId: id } });

const getAllBySellerId = async ({ id }) => Sale.findAll({ where: { sellerId: id } });

const getById = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['email', 'password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
});
  return sale;
};

module.exports = { getAllByCustomerId, getAllBySellerId, getById };
