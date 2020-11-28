module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('hobbies', [
      {
        name:'シャドウレイヤーズ',
        picture:'https://hogehoge/1',
        createdAt: now,
        updatedAt: now,        
      },
     ]);
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('hobbies', null, {}),
};

