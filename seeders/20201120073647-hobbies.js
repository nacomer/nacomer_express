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
      "Hobbies",
      [
        {
          name: "ゴルフ",
          mainPicture: "./image/golf.jpg",
          description:
            "日々の雑踏から離れ 緑と青空の下 四季折々の美しいゴルフ場を歩き回って 白球を追い 汗をかく。ゴルフ場までの小旅行や そこで食事を楽しんだりすることなど 他の多くの趣味やスポーツでは 味わうことの出来ない魅力がある",
          cost: 10000,
          period: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "テニス",
          mainPicture: "./image/tennis.jpg",
          description:
            "・季節に関係なく楽しめるボールを打つ時の爽快感、少人数でも楽しめる、男女一緒に楽しめる、年齢に関係なく楽しめる",
          cost: 5000,
          period: "2",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "キャンプ",
          mainPicture: "./image/camp.jpg",
          description:
            "キャンプはいろんなことを共同で行いますから、おのずと家族や友人とのコミュニケーションも増えます。自然の中に身を置き、日常を忘れて家族のふれあいや自分を見つめなおす機会にもなります。夜なら闇を楽しみ、雨なら雨の音を楽しむ、寒くなったら焚き火を楽しむ。自然をそのまま感じて、地球を感じられるのがキャンプですね。毎日確実に建っている家、あたたかい布団、当たり前に使える電気や水道が、どんなに素晴らしいかと。",
          cost: 20000,
          period: "8",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "そば打ち",
          mainPicture: "./image/soba.jpg",
          description:
            "そば粉と水を均一に混ぜる「水回し」、生地をまとめてコシを生み出す「練り」、麺台の上で生地をのばす「のし」、駒板を使って細く切る「切り」、麺を茹でる「茹で」など、いくつかの工程を踏みますが、それぞれにコツがあり、それを会得する楽しみがあります。",
          cost: 3000,
          period: "8",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "麻雀",
          mainPicture: "./image/mahjong.jpg",
          description:
            "まだだよ...まだ終っていない...まだまだ終わらせない！地獄の淵が見えるまで...限度いっぱいまでいく！どちらかが完全に倒れるまで...勝負の後は骨も残さない",
          cost: 1500,
          period: "24",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "ドライブ",
          mainPicture: "./image/drive.jpg",
          description:
            "Ask any racer. Any real racer. It don’t matter if you win by an inch or a mile. Winning’s winning.",
          cost: 5000,
          period: "24",
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
    return queryInterface.bulkDelete("Hobbies", null, {});
  },
};
