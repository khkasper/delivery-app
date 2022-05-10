const { Sale, SaleProduct } = require('../database/models');

const create = async (body) => {
  const { products, ...saleInfo } = body;
  const sale = await Sale.create({ ...saleInfo, saleDate: new Date() });
  const { id } = sale;

  const orders = await Promise.all(products.map(({ id: productId, quantity }) => (
    SaleProduct.create({ saleId: id, productId, quantity })
  )));

  return { id, orders };
};

module.exports = { create };
