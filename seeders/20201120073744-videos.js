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
      "Videos",
      [
        {
          hobbyId: 1,
          videoURL: "https://www.youtube.com/embed/7norsLxN8ko",
          description: "タイガーウッズのすごいショット集",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          videoURL: "https://www.youtube.com/embed/XLSamYktmUo",
          description:
            "インカレテニス動画インカレテニス動画インカレテニス動画インカレテニス動画インカレテニス動画インカレテニス動画インカレテニス動画インカレテニス動画インカレテニス動画",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          videoURL: "https://www.youtube.com/embed/27eyrDivrz0",
          description: "フェデラーのすごいショット集",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          videoURL: "https://www.youtube.com/embed/3eId8yc-EQQ",
          description:
            "ひろしのソロキャンプ動画ひろしのソロキャンプ動画ひろしのソロキャンプ動画ひろしのソロキャンプ動画",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          videoURL: "https://www.youtube.com/embed/Uq0TPSAo4Fc",
          description: "そば打ちの初心者講習動画",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          videoURL: "https://www.youtube.com/embed/UXbfKTRMMKY",
          description: "Mリーグ！！！！！！！！！！！！！！！！！！！！！！！",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          videoURL: "https://www.youtube.com/embed/fWJfr-1tzyQ",
          description:
            "ワイスピワイスピワイスピワイスピワイスピワイスピワイスピ",
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
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
