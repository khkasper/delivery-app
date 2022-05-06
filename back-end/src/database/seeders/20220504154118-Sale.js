module.exports = {
  up: async (queryInterface, _) => {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 1,
        seller_id: 3,
        total_price: 4.00,
        delivery_address: 'Rua Teste, Bairro Teste, Cidade Teste, Estado Teste',
        delivery_number: '123',
        sale_date: new Date(),
        status: 'Entregue',
      },
      {
        id: 2,
        user_id: 1,
        seller_id: 3,
        total_price: 5.00,
        delivery_address: 'Rua Teste2, Bairro Teste2, Cidade Teste2, Estado Teste2',
        delivery_number: '987',
        sale_date: new Date(),
        status: 'Entregue',
      },
    ])
  },

  down: async (queryInterface, _) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
