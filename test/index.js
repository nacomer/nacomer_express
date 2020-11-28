// testing framework
require("mocha");
const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

// express
const http = require("http");
const app = require("../app");

// db
const db = require("../models/index");

// chai
chai.use(chaiHttp);
chai.should();

describe("Nacomer API Server", () => {
  let request;
  let server;
  before(() => {
    const port = "5000";
    app.set("port", port);
    server = http.createServer(app);
    server.listen(port);
  });

  beforeEach(() => {
    request = chai.request(server).keepOpen();
  });
  afterEach(() => {
    request.close();
  });

  after(() => {
    server.close();
  });

  // ユーザが存在しない場合はユーザを作成し201を返す
  it("POST /login should return 201 when specicying non-existence user", async () => {
    // setup
    const deleteUserObj = {
      googleId: "googleIdHogeHoge",
    };
    const endpoint = "/v1/login";
    const target = "googleIdHogeHoge";
    const sampleData = {
      userName: "Taro Yamada",
      picture:
        "https://lh3.googleusercontent.com/a-/AOh14GgvPUM3JKBN6ndyP_Yx7I61v-8ArYIh8_D6QnLL=s96-c",
    };
    db.user
      .destroy(deleteUserObj)
      .then(async () => {
        // execution
        const res = await request
          .post(endpoint)
          .set({ "x-googleid": target })
          .send(sampleData);
        // assertion
        res.should.have.status(201);
      })
      .catch(async () => {
        // execution
        const res = await request
          .post(endpoint)
          .set({ "x-googleid": target })
          .send(sampleData);
        // assertion
        res.should.have.status(201);
      });
  });

  // ユーザが存在する場合はユーザを作成せず200を返す
  it("POST /login should return 200 when specicying existence user", async () => {
    // setup
    const endpoint = "/v1/login";
    const target = "googleIdHogeHoge";
    const sampleData = {
      userName: "Taro Yamada",
      picture:
        "https://lh3.googleusercontent.com/a-/AOh14GgvPUM3JKBN6ndyP_Yx7I61v-8ArYIh8_D6QnLL=s96-c",
    };
    await request.post(endpoint).set({ "x-googleid": target }).send(sampleData);
    // execution
    const res = await request
      .post(endpoint)
      .set({ "x-googleid": target })
      .send(sampleData);
    // assertion
    res.should.have.status(200);
  });

  it("POST /chatComments should register a chatComment", async () => {
    // setup
    const endpoint = "/v1/chatComments";
    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズやります" },
    });
    const sampleData = {
      eventId: event1.id,
      comment: "あいうえおコメントあいうえお",
    };
    // execution
    const res = await request
      .post(endpoint)
      .set("x-googleid", "hogegoogleid1")
      .send(sampleData);
    // assertion
    res.should.have.status(201);
  });

  it("GET /chatComments should return chatComments", async () => {
    // setup
    const event1 = await db.chatComment.findOne({
      raw: true,
      attributes: ["eventId"],
      where: { comment: "あと一人" },
    });
    const endpoint = "/v1/chatComments?eventId=" + event1.eventId;
    const expected = [
      {
        comment: "あと一人",
        name: "山田一郎",
        googleId: "hogegoogleid1",
        picture: "https://hogehoge/1",
      },
      {
        comment: "よろ",
        name: "山田三郎",
        googleId: "hogegoogleid3",
        picture: "https://hogehoge/3",
      },
    ];

    // execution
    const res = await request.get(endpoint).set("x-googleid", "hogegoogleid1");

    // assertion
    chai.assert.equal(res.body.length, 2);
    const actual = [
      {
        comment: res.body[0].comment,
        name: res.body[0].user.name,
        googleId: res.body[0].user.googleId,
        picture: res.body[0].user.picture,
      },
      {
        comment: res.body[1].comment,
        name: res.body[1].user.name,
        googleId: res.body[1].user.googleId,
        picture: res.body[1].user.picture,
      },
    ];
    expected.should.deep.equal(actual);
  });

  it("GET /events should return all events", async () => {
    // setup
    const endpoint = "/v1/events";
    const expected = [
      {
        subject: "シャドウレイヤーズやります",
        deadline: "2020-12-10T14:00:00.000Z",
        start: "2020-12-17T10:00:00.000Z",
        end: "2020-12-17T13:00:00.000Z",
        maxpart: 10,
        minpart: 5,
        place: "新宿ピカデリー",
        description: "初心者歓迎です。",
        properties: [
          {
            name: "急募",
            category: "alarm",
          },
          {
            name: "オープン",
            category: "information",
          },
          {
            name: "初心者歓迎",
            category: "information",
          },
        ],
        users: [
          {
            name: "山田四郎",
            googleId: "hogegoogleid3",
            picture: "https://hogehoge/3",
          },
          {
            name: "山田三郎",
            googleId: "hogegoogleid3",
            picture: "https://hogehoge/3",
          },
          {
            name: "山田一郎",
            googleId: "hogegoogleid1",
            picture: "https://hogehoge/1",
          },
        ],
      },
      {
        subject: "シャドウレイヤーズすこ",
        deadline: "2020-12-05T14:00:00.000Z",
        start: "2020-12-20T10:00:00.000Z",
        end: "2020-12-20T13:00:00.000Z",
        maxpart: 10,
        minpart: 5,
        place: "新宿ピカデリー",
        description: "初心者の方も。",
        properties: [
          {
            name: "ゆる募",
            category: "information",
          },
          {
            name: "オープン",
            category: "information",
          },
        ],
        users: [
          {
            name: "山田四郎",
            googleId: "hogegoogleid3",
            picture: "https://hogehoge/3",
          },
          {
            name: "山田三郎",
            googleId: "hogegoogleid3",
            picture: "https://hogehoge/3",
          },
          {
            name: "山田二郎",
            googleId: "hogegoogleid2",
            picture: "https://hogehoge/2",
          },
        ],
      },
    ];

    // execution
    const res = await request.get(endpoint).set("x-googleid", "hogegoogleid1");

    // assertion
    chai.assert.equal(res.body.length, 2);

    const actual = [
      {
        subject: res.body[0].subject,
        maxpart: res.body[0].maxpart,
        minpart: res.body[0].minpart,
        place: res.body[0].place,
        description: res.body[0].description,
        properties: [
          {
            name: res.body[0].properties[0].name,
            category: res.body[0].properties[0].category,
          },
          {
            name: res.body[0].properties[1].name,
            category: res.body[0].properties[1].category,
          },
          {
            name: res.body[0].properties[2].name,
            category: res.body[0].properties[2].category,
          },
        ],
        users: [
          {
            name: res.body[0].users[0].name,
            googleId: res.body[0].users[0].googleId,
            picture: res.body[0].users[0].picture,
          },
          {
            name: res.body[0].users[1].name,
            googleId: res.body[0].users[1].googleId,
            picture: res.body[0].users[1].picture,
          },
          {
            name: res.body[0].users[2].name,
            googleId: res.body[0].users[2].googleId,
            picture: res.body[0].users[2].picture,
          },
        ],
      },
      {
        subject: res.body[1].subject,
        maxpart: res.body[1].maxpart,
        minpart: res.body[1].minpart,
        place: res.body[1].place,
        description: res.body[1].description,
        properties: [
          {
            name: res.body[1].properties[0].name,
            category: res.body[1].properties[0].category,
          },
          {
            name: res.body[1].properties[1].name,
            category: res.body[1].properties[1].category,
          },
        ],
        users: [
          {
            name: res.body[1].users[0].name,
            googleId: res.body[1].users[0].googleId,
            picture: res.body[1].users[0].picture,
          },
          {
            name: res.body[1].users[1].name,
            googleId: res.body[1].users[1].googleId,
            picture: res.body[1].users[1].picture,
          },
          {
            name: res.body[1].users[2].name,
            googleId: res.body[1].users[2].googleId,
            picture: res.body[1].users[2].picture,
          },
        ],
      },
    ];
    expected.should.deep.equal(actual);
  });
});
