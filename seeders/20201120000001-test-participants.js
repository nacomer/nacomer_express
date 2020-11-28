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
    const user3 = await db.user.findOne({ raw: true, attributes: ['id'], where: { name: '山田三郎' } });
    const user4 = await db.user.findOne({ raw: true, attributes: ['id'], where: { name: '山田四郎' } });

    const event1 = await db.event.findOne({ raw: true, attributes: ['id'], where: { subject: 'シャドウレイヤーズやります' } });
    const event2 = await db.event.findOne({ raw: true, attributes: ['id'], where: { subject: 'シャドウレイヤーズすこ' } });

    // result1-4の取得が下記処理で間に合わずseedingが安定しないため1秒sleep
    await sleep(1000);

    const now = new Date();
    return queryInterface.bulkInsert('participants', [
      {
        userId:user1.id,
        eventId:event1.id,
        createdAt: now,
        updatedAt: now,        
      },
      {
        userId:user3.id,
        eventId:event1.id,
        createdAt: now,
        updatedAt: now,        
      },
      {
        userId:user4.id,
        eventId:event1.id,
        createdAt: now,
        updatedAt: now,        
      },
      {
        userId:user2.id,
        eventId:event2.id,
        createdAt: now,
        updatedAt: now,        
      },
      {
        userId:user3.id,
        eventId:event2.id,
        createdAt: now,
        updatedAt: now,        
      },
      {
        userId:user4.id,
        eventId:event2.id,
        createdAt: now,
        updatedAt: now,        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('participants', null, {}),
};


