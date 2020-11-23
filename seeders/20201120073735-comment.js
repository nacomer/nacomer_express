'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
   return queryInterface.bulkInsert('Comments', [
    { content: 'これは楽しい趣味', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'いますぐ始めよう', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: '今すぐまたやりたい', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'WRRRRRRYYYYYYYY', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'やらないと人生損してる', hobbyId: "1", createdAt: now, updatedAt: now},
    { content: 'フェデラー最高', hobbyId: "2", createdAt: now, updatedAt: now},
    { content: 'お金かかる', hobbyId: "2", createdAt: now, updatedAt: now},
    { content: '友達増えたーーーーー', hobbyId: "3", createdAt: now, updatedAt: now},
    { content: '奥がふかい', hobbyId: "3", createdAt: now, updatedAt: now},
    { content: '大人の趣味', hobbyId: "4", createdAt: now, updatedAt: now},
    { content: '不合理こそ博打…それが博打の本質、博打の快感…不合理に身を委ねてこそギャンブル', hobbyId: "5", createdAt: now, updatedAt: now},
    { content: 'じじい、そのハイだ', hobbyId: "5", createdAt: now, updatedAt: now},
    { content: '勝利とはリスクと等価交換で手にするもの', hobbyId: "5", createdAt: now, updatedAt: now},
    { content: 'PAが楽しい', hobbyId: "1", createdAt: now, updatedAt: now}
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
