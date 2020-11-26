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
        {
          name: "AAA",
          picture: "AAA",
          googleId: "AAA",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "netaro3",
          picture: "BBB",
          googleId: "BBB",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "kotaro",
          picture: "CCC",
          googleId: "CCC",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "momotaro",
          picture: "DDD",
          googleId: "DDD",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "kitaro",
          picture: "EEE",
          googleId: "EEE",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "kintaro",
          picture: "FFF",
          googleId: "FFF",
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
    return queryInterface.bulkDelete("NacomerUsers", null, {});
  },
};
