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
      "Comments",
      [
        {
          content: "これは楽しい趣味",
          hobbyId: "1",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "いますぐ始めよう",
          hobbyId: "1",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "今すぐまたやりたい",
          hobbyId: "1",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "WRRRRRRYYYYYYYY",
          hobbyId: "1",
          nacomerUserId: "5",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "やらないと人生損してる",
          hobbyId: "1",
          nacomerUserId: "6",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "フェデラー最高",
          hobbyId: "2",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "お金かかる。。。",
          hobbyId: "2",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "めちゃくちゃ痩せた",
          hobbyId: "2",
          nacomerUserId: "4",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "友達増えたーーーーー",
          hobbyId: "3",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "奥がふかい",
          hobbyId: "3",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "ヒロシの動画見てたら行きたくなった",
          hobbyId: "3",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "大人の趣味",
          hobbyId: "4",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "おじさんが多いイメージ",
          hobbyId: "4",
          nacomerUserId: "6",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "モテソウ",
          hobbyId: "4",
          nacomerUserId: "6",
          createdAt: now,
          updatedAt: now,
        },
        {
          content:
            "不合理こそ博打…それが博打の本質、博打の快感…不合理に身を委ねてこそギャンブル",
          hobbyId: "5",
          nacomerUserId: "1",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "じじい、そのハイだ",
          hobbyId: "5",
          nacomerUserId: "3",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "勝利とはリスクと等価交換で手にするもの",
          hobbyId: "5",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "PAが実は楽しい",
          hobbyId: "6",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "上司と交流できる",
          hobbyId: "1",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "人口が多くて、友達増えやすい",
          hobbyId: "1",
          nacomerUserId: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "モテそう",
          hobbyId: "6",
          nacomerUserId: "3",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "子供と行ける",
          hobbyId: "3",
          nacomerUserId: "3",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "リタイアしたおじさんたちがはまる！！！",
          hobbyId: "4",
          nacomerUserId: "3",
          createdAt: now,
          updatedAt: now,
        },
        {
          content: "そば打ち難しいからハマってしまった",
          hobbyId: "4",
          nacomerUserId: "3",
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
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
