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
   return queryInterface.bulkInsert('Videos', [
     {hobbyId: 1, videoURL: "https://www.youtube.com/embed/7norsLxN8ko", createdAt: now, updatedAt: now},
     {hobbyId: 2, videoURL: "https://www.youtube.com/embed/XLSamYktmUo", createdAt: now, updatedAt: now},
     {hobbyId: 2, videoURL: "https://www.youtube.com/embed/27eyrDivrz0", createdAt: now, updatedAt: now},
     {hobbyId: 3, videoURL: "https://www.youtube.com/embed/8wwAwEDeGo", createdAt: now, updatedAt: now},
     {hobbyId: 4, videoURL: "https://www.youtube.com/embed/Uq0TPSAo4Fc", createdAt: now, updatedAt: now},
     {hobbyId: 5, videoURL: "https://www.youtube.com/embed/UXbfKTRMMKY", createdAt: now, updatedAt: now},
     {hobbyId: 6, videoURL: "https://www.youtube.com/embed/fWJfr-1tzyQ", createdAt: now, updatedAt: now},
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Videos', null, {});
  }
};
