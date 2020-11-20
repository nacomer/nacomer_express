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
   return queryInterface.bulkInsert('Goods', [
     {goodsName:"driver",hobbyId: 1, goodsPicture: "./image/driver.png", createdAt: now, updatedAt: now},
     {goodsName:"ball",hobbyId: 2, goodsPicture: "./image/ball.png", createdAt: now, updatedAt: now}
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Goods', null, {});
  }
};
