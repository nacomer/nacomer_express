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
          description: "ゴルフのサブイメージ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          subPicture: "./image/sub_tennis.png",
          description: "テニスのサブイメージ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          subPicture: "./image/sub_camp.png",
          description: "キャンプのサブイメージ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          subPicture: "./image/sub_soba.png",
          description: "そばのサブイメージ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          subPicture: "./image/sub_jan.png",
          description: "麻雀のサブイメージ",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          subPicture: "./image/sub_dirive.png",
          description: "ドライブのサブイメージ",
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
