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
      "Personalities",
      [
        {
          name: "indoor-collector",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "indoor-athlete",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "indoor-viewer",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "indoor-creator",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "outdoor-collector",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "outdoor-athlete",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "outdoor-viewer",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "outdoor-creator",
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
    return queryInterface.bulkDelete("Personalities", null, {});
  },
};
