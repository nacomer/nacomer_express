// testing framework
require("mocha");
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
// const expect = chai.expect;

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

  // post投稿テスト
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
});
