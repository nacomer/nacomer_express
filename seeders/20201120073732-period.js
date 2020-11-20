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
   return queryInterface.bulkInsert('Periods', [
    { hours: '1', createdAt: now, updatedAt: now},
    { hours: '2', createdAt: now, updatedAt: now},
    { hours: '5', createdAt: now, updatedAt: now},
    { hours: '10', createdAt: now, updatedAt: now},
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Periods', null, {});
  }
};
