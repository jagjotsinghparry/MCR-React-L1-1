'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Casts',
      [
        {
          movieId: 1,
          name: 'Robert',
          profilePict:
            'https://i.pinimg.com/236x/3e/1a/e1/3e1ae1f2fbe06fe06a64611df47c9ae7.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          name: 'Cayn',
          profilePict:
            'https://i.pinimg.com/236x/3e/1a/e1/3e1ae1f2fbe06fe06a64611df47c9ae7.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          name: 'Ray',
          profilePict:
            'https://i.pinimg.com/236x/3e/1a/e1/3e1ae1f2fbe06fe06a64611df47c9ae7.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          name: 'Moni',
          profilePict:
            'https://i.pinimg.com/236x/3e/1a/e1/3e1ae1f2fbe06fe06a64611df47c9ae7.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Casts', null, {});
  },
};
