'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const now = new Date();
   return queryInterface.bulkInsert('Comments', [
    { content: 'これは楽しい趣味', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'いますぐ始めよう', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: '今すぐまたやりたい', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'WRRRRRRYYYYYYYY', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'やらないと人生損してる', hobbyId: "1", createdAt: now, updatedAt: now},
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
