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
    return queryInterface.bulkInsert('SubPictures', [
      {hobbyId: 1, subPicture: "./image/sub_golf.png", createdAt: now, updatedAt: now},
      {hobbyId: 2, subPicture: "./image/sub_tennis.png", createdAt: now, updatedAt: now}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('SubPictures', null, {});
  }
};
