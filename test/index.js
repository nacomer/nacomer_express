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
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GgvPUM3JKBN6ndyP_Yx7I61v-8ArYIh8_D6QnLL=s96-c",
      },
      {
        comment: "よろ",
        name: "山田三郎",
        googleId: "hogegoogleid3",
        picture: "https://hogehoge/3",
      },
      {
        comment: "あいうえおコメントあいうえお",
        name: "山田一郎",
        googleId: "hogegoogleid1",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GgvPUM3JKBN6ndyP_Yx7I61v-8ArYIh8_D6QnLL=s96-c",
      },
    ];

    // execution
    const res = await request.get(endpoint).set("x-googleid", "hogegoogleid1");

    // assertion
    chai.assert.equal(res.body.length, 3);
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
      {
        comment: res.body[2].comment,
        name: res.body[2].user.name,
        googleId: res.body[2].user.googleId,
        picture: res.body[2].user.picture,
      },
    ];
    expected.should.deep.equal(actual);
  });

  it("GET /events should return a specified events", async () => {
    // setup
    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズやります" },
    });
    const endpoint = "/v1/events/" + event1.id;
    const expected = {
      subject: "シャドウレイヤーズやります",
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
          name: "山田一郎",
          googleId: "hogegoogleid1",
          picture:
            "https://lh3.googleusercontent.com/a-/AOh14GgvPUM3JKBN6ndyP_Yx7I61v-8ArYIh8_D6QnLL=s96-c",
        },
        {
          name: "山田三郎",
          googleId: "hogegoogleid3",
          picture: "https://hogehoge/3",
        },
        {
          name: "山田四郎",
          googleId: "hogegoogleid3",
          picture: "https://hogehoge/3",
        },
      ],
    };

    // execution
    const res = await request.get(endpoint).set("x-googleid", "hogegoogleid1");

    // assertion
    const actual = {
      subject: res.body.subject,
      maxpart: res.body.maxpart,
      minpart: res.body.minpart,
      place: res.body.place,
      description: res.body.description,
      properties: [
        {
          name: res.body.properties[0].name,
          category: res.body.properties[0].category,
        },
        {
          name: res.body.properties[1].name,
          category: res.body.properties[1].category,
        },
        {
          name: res.body.properties[2].name,
          category: res.body.properties[2].category,
        },
      ],
      users: [
        {
          name: res.body.users[0].name,
          googleId: res.body.users[0].googleId,
          picture: res.body.users[0].picture,
        },
        {
          name: res.body.users[1].name,
          googleId: res.body.users[1].googleId,
          picture: res.body.users[1].picture,
        },
        {
          name: res.body.users[2].name,
          googleId: res.body.users[2].googleId,
          picture: res.body.users[2].picture,
        },
      ],
    };
    expected.should.deep.equal(actual);
  });

  it("POST /participant should register a participant", async () => {
    // setup
    const endpoint = "/v1/participant";
    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズすこ" },
    });
    const sampleData = {
      eventId: event1.id,
    };
    // execution
    const res = await request
      .post(endpoint)
      .set("x-googleid", "hogegoogleid1")
      .send(sampleData);
    // assertion
    res.should.have.status(201);
  });

  it("POST /participant should response 409 if a user already applied", async () => {
    // setup
    const endpoint = "/v1/participant";
    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズすこ" },
    });
    const sampleData = {
      eventId: event1.id,
    };
    // execution
    const res = await request
      .post(endpoint)
      .set("x-googleid", "hogegoogleid1")
      .send(sampleData);
    // assertion
    res.should.have.status(409);
  });

  it("DELETE /participant should delete a participant", async () => {
    // setup
    const endpoint = "/v1/participant";
    const event1 = await db.event.findOne({
      raw: true,
      attributes: ["id"],
      where: { subject: "シャドウレイヤーズすこ" },
    });
    let before = await db.participant.findAll({
      raw: true,
      where: { eventId: event1.id },
    });

    const expect = before.length - 1;

    const sampleData = {
      eventId: event1.id,
    };

    // execution
    const res = await request
      .delete(endpoint)
      .set("x-googleid", "hogegoogleid1")
      .send(sampleData);
    // assertion
    res.should.have.status(204);
    let after = await db.participant.findAll({
      raw: true,
      where: { eventId: event1.id },
    });
    const actual = after.length;
    actual.should.be.equal(expect);
  });

  it("GET /hobbies should return a specified hobby", async () => {
    // setup
    const hobby1 = await db.hobby.findOne({
      raw: true,
      attributes: ["id"],
      where: { name: "シャドウレイヤーズ" },
    });
    const endpoint = "/v1/hobbies/" + hobby1.id;
    const expected = [
      {
        // "id": "f037ae73-8efe-42ba-a2bd-20d425e18952",
        name: "シャドウレイヤーズ",
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/917h8kCq5sL._AC_SL1500_.jpg",
        events: [
          {
            // "id": "12b0ddd1-e61b-4285-a84f-a6ab7121674d",
            subject: "シャドウレイヤーズやります",
            // "ownerId": "899d7173-e439-4028-a4bc-274c16d04458",
            // "deadline": "2020-12-10T14:00:00.000Z",
            // "start": "2020-12-17T10:00:00.000Z",
            // "end": "2020-12-17T13:00:00.000Z",
            maxpart: 10,
            minpart: 5,
            place: "新宿ピカデリー",
            description: "初心者歓迎です。",
            // "hobbyId": "f037ae73-8efe-42ba-a2bd-20d425e18952"
          },
          {
            // "id": "d07e4158-19c2-4012-a5ce-2f10be1035dc",
            subject: "シャドウレイヤーズすこ",
            // "ownerId": "a7a966df-ccdd-444a-878c-ad7bd88c22c6",
            // "deadline": "2020-12-05T14:00:00.000Z",
            // "start": "2020-12-20T10:00:00.000Z",
            // "end": "2020-12-20T13:00:00.000Z",
            maxpart: 10,
            minpart: 5,
            place: "新宿ピカデリー",
            description: "初心者の方も。",
            // "hobbyId": "f037ae73-8efe-42ba-a2bd-20d425e18952"
          },
        ],
      },
    ];

    // execution
    const res = await request.get(endpoint).set("x-googleid", "hogegoogleid1");

    // assertion
    const actual = [
      {
        name: res.body.name,
        picture: res.body.picture,
        events: [
          {
            subject: res.body.events[0].subject,
            maxpart: res.body.events[0].maxpart,
            minpart: res.body.events[0].minpart,
            place: res.body.events[0].place,
            description: res.body.events[0].description,
          },
          {
            subject: res.body.events[1].subject,
            maxpart: res.body.events[1].maxpart,
            minpart: res.body.events[1].minpart,
            place: res.body.events[1].place,
            description: res.body.events[1].description,
          },
        ],
      },
    ];
    expected.should.deep.equal(actual);
  });

  it("GET(test) /events should return all event id", async () => {
    // setup
    const endpoint = "/v1/events";
    const events = await db.event.findAll({
      raw: true,
      attributes: ["id"],
    });

    // execution
    const res = await request.get(endpoint).set("x-googleid", "hogegoogleid1");
    // assertion
    res.should.have.status(200);
    res.body.should.deep.equal(events);
  });
});
