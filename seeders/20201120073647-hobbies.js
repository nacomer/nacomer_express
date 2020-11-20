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
   return queryInterface.bulkInsert('Hobbies', [
    { name: 'ゴルフ',  mainPicture: 'golf.jpg', description: 'みんなのゴルフ', cost : 1, periodId: 1, createdAt: now, updatedAt: now},
    { name: 'テニス',  mainPicture: 'tennis.jpg', description: 'テニスの王子様', cost : 1, periodId: 1, createdAt: now, updatedAt: now},
    { name: 'キャンプ',  mainPicture: 'camp.jpg', description: 'ゆるきゃん△', cost : 1, periodId: 1, createdAt: now, updatedAt: now},
    { name: 'そば打ち',  mainPicture: 'soba.jpg', description: '美味しいそば', cost : 1, periodId: 1, createdAt: now, updatedAt: now},
    { name: '麻雀',  mainPicture: 'mahjong.jpg', description: 'M.LEAGEUを見るところから', cost : 1, periodId: 1, createdAt: now, updatedAt: now},
    { name: 'ドライブ',  mainPicture: 'drive.jpg', description: 'マリオカート', cost : 1, periodId: 1, createdAt: now, updatedAt: now},
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Hobbies', null, {});
  }
};
