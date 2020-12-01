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
      where: { name: "山田太郎" },
    });
    const user4 = await db.user.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "佐藤太郎" },
    });
    const hobby1 = await db.hobby.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "シャドウレイダーズ" },
    });

    const hobby2 = await db.hobby.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "LOSTARK" },
    });

    const hobby3 = await db.hobby.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "ラグナロクオンライン" },
    });

    // result1-4の取得が下記処理で間に合わずseedingが安定しないため1秒sleep
    await sleep(1000);

    const now = new Date();
    return queryInterface.bulkInsert("events", [
      {
        subject: "シャドウレイダーズやります",
        ownerId: user1.id,
        deadline: new Date("2020-12-10T23:00:00"),
        start: new Date("2020-12-17T19:00:00"),
        end: new Date("2020-12-17T22:00:00"),
        maxpart: 100,
        minpart: 5,
        place: "新宿ピカデリー",
        description: "初心者歓迎です。",
        hobbyId: hobby1.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        subject: "シャドウレイダーズすこ",
        ownerId: user2.id,
        deadline: new Date("2020-12-05T23:00:00"),
        start: new Date("2020-12-20T19:00:00"),
        end: new Date("2020-12-20T22:00:00"),
        maxpart: 100,
        minpart: 5,
        place: "新宿ピカデリー",
        description: "初心者の方も。",
        hobbyId: hobby1.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        subject: "LOST ARKやるで",
        ownerId: user3.id,
        deadline: new Date("2020-12-10T23:00:00"),
        start: new Date("2020-12-17T19:00:00"),
        end: new Date("2020-12-17T22:00:00"),
        maxpart: 8,
        minpart: 2,
        place: "武蔵小杉",
        description: "初心者歓迎です。",
        hobbyId: hobby2.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        subject: "LOST ARKやるお、来てお",
        ownerId: user3.id,
        deadline: new Date("2020-12-10T23:00:00"),
        start: new Date("2020-12-17T19:00:00"),
        end: new Date("2020-12-17T22:00:00"),
        maxpart: 8,
        minpart: 2,
        place: "武蔵小杉",
        description: "初心者歓迎ですお。",
        hobbyId: hobby2.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        subject: "ラグナログオンラインやりますよ！",
        ownerId: user4.id,
        deadline: new Date("2020-12-10T23:00:00"),
        start: new Date("2020-12-17T19:00:00"),
        end: new Date("2020-12-17T22:00:00"),
        maxpart: 4,
        minpart: 2,
        place: "ZOOM、詳細はチャットで。",
        description: "初心者歓迎です。",
        hobbyId: hobby3.id,
        createdAt: now,
        updatedAt: now,
      },
      {
        subject: "ラグナログオンラインやるお、みんな来てお",
        ownerId: user4.id,
        deadline: new Date("2020-12-10T23:00:00"),
        start: new Date("2020-12-17T19:00:00"),
        end: new Date("2020-12-17T22:00:00"),
        maxpart: 4,
        minpart: 2,
        place: "ZOOM、詳細はチャットで。",
        description: "初心者歓迎ですお。",
        hobbyId: hobby3.id,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete("events", null, {}),
};
