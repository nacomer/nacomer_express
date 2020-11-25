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
      "Categories",
      [
        {
          hobbyId: 1,
          name: "アウトドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 1,
          name: "スポーツ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          name: "アウトドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          name: "スポーツ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          name: "アウトドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          name: "旅行",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          name: "インドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          name: "料理",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          name: "インドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          name: "ギャンブル",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          name: "アウトドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          name: "旅行",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 7,
          name: "インドア",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 7,
          name: "スポーツ",
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
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
