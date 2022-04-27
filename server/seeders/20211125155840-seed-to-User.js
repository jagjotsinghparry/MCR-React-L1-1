'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          username: 'JohnDoe',
          email: 'jhonDoe@gmail.com',
          password: '12345678',
          role: 'admin',
          phoneNumber: '2928318120319',
          address: 'semarang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          username: 'akbar',
          email: 'akbar@gmail.com',
          password: '12345678',
          role: 'admin',
          phoneNumber: '2928318120319',
          address: 'semarang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          username: 'abae',
          email: 'abae@gmail.com',
          password: '12345678',
          role: 'admin',
          phoneNumber: '2928318120319',
          address: 'semarang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
