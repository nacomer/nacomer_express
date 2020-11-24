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
      "SubPictures",
      [
        {
          hobbyId: 1,
          subPicture: "./image/sub_golf.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          subPicture: "./image/sub_tennis.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          subPicture: "./image/sub_camp.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          subPicture: "./image/sub_soba.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          subPicture: "./image/sub_jan.png",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          subPicture: "./image/sub_dirive.png",
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
    return queryInterface.bulkDelete("SubPictures", null, {});
  },
};
