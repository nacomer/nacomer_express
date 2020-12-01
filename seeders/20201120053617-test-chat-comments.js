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
    const participant1 = await db.participant.findOne({
      raw: true,
      attributes: ["id"],
      where: { userId: user1.id },
    });
    // const user2 = await db.user.findOne({
    //   raw: true,
    //   attributes: ["id"],
    //   where: { name: "山田二郎" },
    // });
    // const participant2 = await db.participant.findOne({
    //   raw: true,
    //   attributes: ["id"],
    //   where: { userId: user2.id },
    // });
    const user3 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田三郎" },
    });
    const participant3 = await db.participant.findOne({
      raw: true,
      attributes: ["id"],
      where: { userId: user3.id },
    });
    const user4 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "山田四郎" },
    });
    const participant4 = await db.participant.findOne({
      raw: true,
      attributes: ["id"],
      where: { userId: user4.id },
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

    // result1-4の取得が下記処理で間に合わずseedingが安定しないため1秒sleep
    await sleep(1000);

    const now = new Date();
    return queryInterface.bulkInsert("chatComments", [
      {
        participantId: participant1.id,
        eventId: event1.id,
        comment: "あと一人",
        date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        participantId: participant3.id,
        eventId: event1.id,
        comment: "よろ",
        date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        participantId: participant3.id,
        eventId: event2.id,
        comment: "寒くなってきましたね",
        date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        participantId: participant4.id,
        eventId: event2.id,
        comment: "実は初めてなんです",
        date: now,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete("chatComments", null, {}),
};
