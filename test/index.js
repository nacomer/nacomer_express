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
});
