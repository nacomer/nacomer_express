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
        { name: "netaro3", password: "BBB", createdAt: now, updatedAt: now },
        { name: "kotaro", password: "CCC", createdAt: now, updatedAt: now },
        { name: "momotaro", password: "DDD", createdAt: now, updatedAt: now },
        { name: "kitaro", password: "EEE", createdAt: now, updatedAt: now },
        { name: "kintaro", password: "FFF", createdAt: now, updatedAt: now },
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
