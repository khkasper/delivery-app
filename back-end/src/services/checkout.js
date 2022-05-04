const { Sale, SaleProduct } = require('../database/models');

const create = async (body) => {
  const { products, ...saleInfo } = body;
  const sale = await Sale.create(saleInfo);
  console.log(sale);
  const { id } = sale;

  await Promise.all(products.forEach(({ id: productId, quantity }) => (
    SaleProduct.create({ saleId: id, productId, quantity })
  )));

  return { id, ...body };
};

module.exports = { create };

/* {
    "userId": 3,
    "sellerId": 1,
    "totalPrice": 100.00,
    "deliveryAddress": "Rua Teste",
    "deliveryNumber": 123,
    "saleDate": "2020-05-05T00:00:00.0000",
    "status": "Pendente",
    "products":
  [
    {
      "id": 1,
      "name": "Cerveja",
      "price": 10,
      "urlImage": "l",
      "quantity": 5
    },
    {
      "id": 2,
      "name": "Cervejao",
      "price": 100,
      "urlImage": "l",
      "quantity": 6
    }
  ]
} */
