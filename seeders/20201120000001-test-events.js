const db = require('../models/index');

// sleep関数
function sleep(msec) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, msec);
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const user1 = await db.user.findOne({ raw: true, attributes: ['id'], where: { name: '山田一郎' } });
    const user2 = await db.user.findOne({ raw: true, attributes: ['id'], where: { name: '山田二郎' } });

    const hobby1 = await db.hobby.findOne({ raw: true, attributes: ['id'], where: { name: 'シャドウレイヤーズ' } });

    // result1-4の取得が下記処理で間に合わずseedingが安定しないため1秒sleep
    await sleep(1000);

    const now = new Date();
    return queryInterface.bulkInsert('events', [
      {
        subject:'シャドウレイヤーズやります',
        ownerId:user1.id,
        deadline:new Date('2020-12-10T23:00:00'),
        start:new Date('2020-12-17T19:00:00'),
        end:new Date('2020-12-17T22:00:00'),
        maxpart:10,
        minpart:5,
        place:'新宿ピカデリー',
        description:'初心者歓迎です。',
        hobbyId: hobby1.id,
        createdAt: now,
        updatedAt: now,        
      },
      {
        subject:'シャドウレイヤーズすこ',
        ownerId:user2.id,
        deadline:new Date('2020-12-05T23:00:00'),
        start:new Date('2020-12-20T19:00:00'),
        end:new Date('2020-12-20T22:00:00'),
        maxpart:10,
        minpart:5,
        place:'新宿ピカデリー',
        description:'初心者の方も。',
        hobbyId: hobby1.id,
        createdAt: now,
        updatedAt: now,        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('events', null, {}),
};


