"use strict";

module.exports = {
  //   up: async (queryInterface, Sequelize) => {
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
      "NacomerUsers",
      [
        { id: 0, name: "guest", password: "guest", createdAt: now, updatedAt: now },
        { id: 1, name: "AAA", password: "AAA", createdAt: now, updatedAt: now },
        { id: 2, name: "BBB", password: "BBB", createdAt: now, updatedAt: now },
        { id: 3, name: "CCC", password: "CCC", createdAt: now, updatedAt: now },
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
    return queryInterface.bulkDelete("NacomerUsers", null, {});
  },
};
