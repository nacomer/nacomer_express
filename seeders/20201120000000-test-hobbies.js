module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    return queryInterface.bulkInsert("hobbies", [
      {
        name: "シャドウレイダーズ",
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/917h8kCq5sL._AC_SL1500_.jpg",
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
