module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    return queryInterface.bulkInsert("hobbies", [
      {
        name: "シャドウレイヤーズ",
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/917h8kCq5sL._AC_SL1500_.jpg",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete("hobbies", null, {}),
};
