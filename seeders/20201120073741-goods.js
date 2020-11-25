"use strict";

module.exports = {
  up: async (queryInterface) => {
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
    return queryInterface.bulkInsert(
      "Goods",
      [
        {
          goodsName: "driver",
          hobbyId: 1,
          goodsPicture: "./image/driver.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "golfWear",
          hobbyId: 1,
          goodsPicture: "./image/golfWear.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "globe",
          hobbyId: 1,
          goodsPicture: "./image/golfGlobe.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "tennisBall",
          hobbyId: 2,
          goodsPicture: "./image/tennisBall.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "campingCar",
          hobbyId: 3,
          goodsPicture: "./image/campingCar.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "すり鉢",
          hobbyId: 4,
          goodsPicture: "./image/suribachi.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "牌",
          hobbyId: 5,
          goodsPicture: "./image/hai.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "全自動麻雀卓",
          hobbyId: 5,
          goodsPicture: "./image/table.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "sunglass",
          hobbyId: 6,
          goodsPicture: "./image/sunglass.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          goodsName: "benz",
          hobbyId: 6,
          goodsPicture: "./image/benz.png",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Goods", null, {});
  },
};
