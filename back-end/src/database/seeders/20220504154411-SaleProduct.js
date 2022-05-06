module.exports = {
  up: async (queryInterface, _) => {
    await queryInterface.bulkInsert('salesProducts', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 5,
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 10,
      },
    ])
  },

  down: async (queryInterface, _) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};
