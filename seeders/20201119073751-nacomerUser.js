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
        { name: "AAA", password: "AAA", createdAt: now, updatedAt: now },
        { name: "BBB", password: "BBB", createdAt: now, updatedAt: now },
        { name: "CCC", password: "CCC", createdAt: now, updatedAt: now },
        { name: "DDD", password: "DDD", createdAt: now, updatedAt: now },
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
