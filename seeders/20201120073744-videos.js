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
      "Videos",
      [
        {
          hobbyId: 1,
          videoURL: "https://www.youtube.com/embed/7norsLxN8ko",
          description: "Top 100 Golf Shots of the Year | Best of 2019",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 1,
          videoURL: "https://www.youtube.com/embed/-231hDaQRbY",
          description:
            "ゴルフ初心者へ！スイングの基本を習得するためのポイント【ゴルファボ】【青山加織】",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          videoURL: "https://www.youtube.com/embed/XLSamYktmUo",
          description:
            "【インカレ テニス】２０１８ 決勝　望月勇希（中央大学）VS 羽澤慎治（慶応義塾大学）1st set",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          videoURL: "https://www.youtube.com/embed/l3i4P6albMM",
          description: "はじめてのテニス！【初心者レッスン】",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 2,
          videoURL: "https://www.youtube.com/embed/27eyrDivrz0",
          description:
            "【テニススーパープレイ集】super play collection...世界のスーパープレイが気持ちよすぎる...",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          videoURL: "https://www.youtube.com/embed/3eId8yc-EQQ",
          description: "もうすぐ春のソロキャンプ | ヒロシちゃんねる",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 3,
          videoURL: "https://www.youtube.com/embed/KYeqijxs3m8",
          description:
            "【ソロキャン】白石麻衣、ついに念願のソロキャンプ！【のはずが…】#13",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          videoURL: "https://www.youtube.com/embed/Uq0TPSAo4Fc",
          description: "初心者向け蕎麦打ち教室",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 4,
          videoURL: "https://www.youtube.com/embed/a36fWBU26Ec",
          description: "【素人でも出来るそば打ち】",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          videoURL: "https://www.youtube.com/embed/UXbfKTRMMKY",
          description: "【大逆転】四暗刻単騎【Mリーグ公式】",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 5,
          videoURL: "https://www.youtube.com/embed/t7LJUo7mPvM",
          description: "【麻雀】初心者向け！麻雀ルール説明動画！前編",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          videoURL: "https://www.youtube.com/embed/fWJfr-1tzyQ",
          description:
            "ワイルドスピードX2 R34 GT-R vs スープラ vs S2000 vs RX-7 ノーカット",
          createdAt: now,
          updatedAt: now,
        },
        {
          hobbyId: 6,
          videoURL: "https://www.youtube.com/embed/-D7Vk-jkaEA",
          description:
            "【命懸け】3年ぶりのペーパードライバーと無免許の女子２人で由比ヶ浜へドライブ…",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
