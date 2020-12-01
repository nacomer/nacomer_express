const db = require("../models/index");

// sleep関数
function sleep(msec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, msec);
  });
}

module.exports = {
  up: async (queryInterface) => {
    const user1 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田一郎" },
    });
    const user2 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田二郎" },
    });
    const user3 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田三郎" },
    });
    const user4 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田四郎" },
    });

    const user5 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田太郎" },
    });
    const user6 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "佐藤太郎" },
    });

    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイダーズやります" },
    });
    const event2 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイダーズすこ" },
    });

    const event3 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "LOST ARKやります、全員集合" },
    });
    const event4 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "LOST ARKやるお、みんな来てお" },
    });
    const event5 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "ラグナログオンラインやりますよ！" },
    });
    const event6 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "ラグナログオンラインやるお、みんな来てお" },
    });

    // result1-4の取得が下記処理で間に合わずseedingが安定しないため1秒sleep
    await sleep(1000);

    const now = new Date();
    return queryInterface.bulkInsert("participants", [
      {
        userId: user1.id,
        eventId: event1.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user3.id,
        eventId: event1.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user4.id,
        eventId: event1.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user2.id,
        eventId: event2.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user3.id,
        eventId: event2.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user4.id,
        eventId: event2.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user5.id,
        eventId: event3.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user6.id,
        eventId: event3.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user5.id,
        eventId: event4.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user6.id,
        eventId: event4.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user5.id,
        eventId: event5.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user6.id,
        eventId: event5.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user5.id,
        eventId: event6.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: user6.id,
        eventId: event6.id,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete("participants", null, {}),
};
