module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    return queryInterface.bulkInsert("hobbies", [
      {
        name: "シャドウレイヤーズ",
        picture: "https://hogehoge/1",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete("hobbies", null, {}),
};
