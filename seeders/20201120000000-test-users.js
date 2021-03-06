module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    return queryInterface.bulkInsert("users", [
      {
        name: "山田一郎",
        googleId: "hogegoogleid1",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GgvPUM3JKBN6ndyP_Yx7I61v-8ArYIh8_D6QnLL=s96-c",
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
      {
        name: "山田太郎",
        googleId: "117617346741548829260",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GgDL5j6caFlNHl2BFS-GNSjFKMFAKk7Q64TuFJM=s96-c",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "佐藤太郎",
        googleId: "112399838152661664821",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GisUhQpzN5YJ4PdjiSd9A5RiewzyTnpRABdlkLF=s96-c",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete("users", null, {}),
};
