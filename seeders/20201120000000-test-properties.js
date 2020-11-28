module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('properties', [
      {
        name:'急募',
        category:'alarm',
        createdAt: now,
        updatedAt: now,        
      },
      {
        name:'ゆる募',
        category:'information',
        createdAt: now,
        updatedAt: now,        
      },
      {
        name:'オープン',
        category:'information',
        createdAt: now,
        updatedAt: now,        
      },
      {
        name:'初心者歓迎',
        category:'information',
        createdAt: now,
        updatedAt: now,        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('properties', null, {}),
};

