module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    return queryInterface.bulkInsert("hobbies", [
      {
        name: "シャドウレイダーズ",
        picture:
          "https://boku-boardgame.net/wp-content/uploads/2019/06/shadow-raiders-expnsion-top-1.jpg",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "LOSTARK",
        picture:
          "https://file.gameon.jp/lostark/images/common/header/logo_normal.png",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "ラグナロクオンライン",
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61zXN1%2BnhdL._AC_.jpg",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete("hobbies", null, {}),
};
