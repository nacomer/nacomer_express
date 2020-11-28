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
    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズやります" },
    });
    const event2 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズすこ" },
    });

    const property1 = await db.property.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "急募" },
    });
    const property2 = await db.property.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "ゆる募" },
    });
    const property3 = await db.property.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "オープン" },
    });
    const property4 = await db.property.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "初心者歓迎" },
    });

    // result1-4の取得が下記処理で間に合わずseedingが安定しないため1秒sleep
    await sleep(1000);

    const now = new Date();
    return queryInterface.bulkInsert("eventProperties", [
      {
        eventId: event1.id,
        propertyId: property1.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        eventId: event1.id,
        propertyId: property3.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        eventId: event1.id,
        propertyId: property4.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        eventId: event2.id,
        propertyId: property2.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        eventId: event2.id,
        propertyId: property3.id,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete("eventProperties", null, {}),
};
