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

xdescribe("Threetter API Server", () => {
  let request;
  let server;
  before(() => {
    const port = "8080";
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

  xit("GET /posts should return entire post list", async () => {
    // setup
    const endpoint = "/v1/threetter/posts";
    const posts = await db.posts
      .findAll({
        raw: true,
        order: [
          ["date", "DESC"],
          [db.tgts, "seq", "ASC"],
        ],
        include: [
          {
            model: db.users,
            required: true,
          },
          {
            model: db.tgts,
            required: true,
          },
        ],
      })
      .then((data) => {
        const postsArray = [];
        data.forEach((post) => {
          const postsIndex = postsArray.findIndex((p) => p.id === post.id);
          if (postsIndex === -1) {
            const resPost = {
              id: post.id,
              date: post.date.toString(),
              user: {
                id: post["user.id"],
                name: post["user.userName"],
                picture: post["user.picture"],
              },
              tgts: {
                id1: post["tgts.id"],
                text1: post["tgts.tgt"],
              },
            };
            postsArray.push(resPost);
          } else if (!postsArray[postsIndex].tgts.id2) {
            postsArray[postsIndex].tgts.id2 = post["tgts.id"];
            postsArray[postsIndex].tgts.text2 = post["tgts.tgt"];
          } else {
            postsArray[postsIndex].tgts.id3 = post["tgts.id"];
            postsArray[postsIndex].tgts.text3 = post["tgts.tgt"];
          }
        });
        return postsArray;
      });
    // exercise
    const res = await request.get(endpoint);
    // assertion
    res.should.have.status(200);
    res.should.be.json;
    JSON.parse(JSON.stringify(res.body)).should.deep.equal(posts);
  });
});
