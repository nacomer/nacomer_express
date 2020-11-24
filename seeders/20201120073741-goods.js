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
     {goodsName:"golfWear",hobbyId: 1, goodsPicture: "./image/golfWear.png", createdAt: now, updatedAt: now},
     {goodsName:"globe",hobbyId: 1, goodsPicture: "./image/golfGlobe.png", createdAt: now, updatedAt: now},
     {goodsName:"tennisBall",hobbyId: 2, goodsPicture: "./image/tennisBall.png", createdAt: now, updatedAt: now},
     {goodsName:"campingCar",hobbyId: 3, goodsPicture: "./image/campingCar.png", createdAt: now, updatedAt: now},
     {goodsName:"suribachi",hobbyId: 4, goodsPicture: "./image/suribachi.png", createdAt: now, updatedAt: now},
     {goodsName:"hai",hobbyId: 5, goodsPicture: "./image/hai.png", createdAt: now, updatedAt: now},
     {goodsName:"sunglass",hobbyId: 6, goodsPicture: "./image/sunglass.png", createdAt: now, updatedAt: now},
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
