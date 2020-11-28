module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    return queryInterface.bulkInsert("users", [
      {
        name: "山田一郎",
        googleId: "hogegoogleid1",
        picture: "https://hogehoge/1",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "山田二郎",
        googleId: "hogegoogleid2",
        picture: "https://hogehoge/2",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "山田三郎",
        googleId: "hogegoogleid3",
        picture: "https://hogehoge/3",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "山田四郎",
        googleId: "hogegoogleid3",
        picture: "https://hogehoge/3",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete("users", null, {}),
};
