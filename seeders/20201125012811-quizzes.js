"use strict";

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const now = new Date();
    return queryInterface.bulkInsert(
      "Quizzes",
      [
        {
          quizCategory: "active",
          quizContent: "外で運動するのは好きですか？",
          picture: "http://s3hogehoge",
          createdAt: now,
          updatedAt: now,
        },
        {
          quizCategory: "active",
          quizContent: "ワイワイするのが好きですか？",
          picture: "http://s3hogehoge",
          createdAt: now,
          updatedAt: now,
        },
        {
          quizCategory: "active",
          quizContent: "飲み会は好きですか？",
          picture: "http://s3hogehoge",
          createdAt: now,
          updatedAt: now,
        },
        {
          quizCategory: "productive",
          quizContent: "感情的な会話より、理性的な会話を好む",
          picture: "http://s3hogehoge",
          createdAt: now,
          updatedAt: now,
        },
        {
          quizCategory: "particular",
          quizContent: "神は細部に宿ると信じている",
          picture: "http://s3hogehoge",
          createdAt: now,
          updatedAt: now,
        },
        {
          quizCategory: "outdoor",
          quizContent: "外でワイワイするのが楽しい",
          picture: "http://s3hogehoge",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Quizzes", null, {});
  },
};
