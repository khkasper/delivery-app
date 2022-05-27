const mockCheckout = {
  products: [
    {
      id: 1,
      name: "Skol Lata 250ml",
      price: "2.20",
      urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg",
      quantity: 1,
    },
  ],
  saleInfo: {
    sellerId: 2,
    deliveryAddress: "123113131311",
    deliveryNumber: "21132131313131",
    totalPrice: 2.2,
    userId: 3,
    status: "Pendente",
    saleDate: "2022-05-27T02:01:07.954Z",
  },
};

module.exports = { mockCheckout };
