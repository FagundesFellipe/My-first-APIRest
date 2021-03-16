const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      nome: 'Luiz',
      email: 'luiz@teste.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Luiz2',
      email: 'luiz2@teste.com',
      password_hash: await bcryptjs.hash('789456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Luiz3',
      email: 'luiz3@teste.com',
      password_hash: await bcryptjs.hash('147852', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }], {});
  },

  down: async () => {

  },
};
