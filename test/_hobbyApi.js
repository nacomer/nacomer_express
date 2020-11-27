const chai = require("chai");
const chaiHttp = require("chai-http");
const Hobby = require("../models").Hobby;
const Comment = require("../models").Comment;
const Video = require("../models").Video;
const SubPicture = require("../models").SubPicture;
const Goods = require("../models").Goods;
const NacomerUser = require("../models").NacomerUser;
const Category = require("../models").Category;
const assert = chai.assert;

chai.use(chaiHttp);

const app = require("../app");
const http = require("http");
chai.should();

describe("Hobby Api Server", () => {
  const server = http.createServer(app);
  let request;
  let TEST_COMMENT_ID;

  beforeEach(async () => {
    request = chai.request(server).keepOpen();

    const comment = await Comment.create({
      hobbyId: 1,
      content: "TEST COMMENT",
      nacomerUserId: 1,
    });
    TEST_COMMENT_ID = comment.id;
    return comment;
  });

  afterEach(async () => {
    await Comment.destroy({
      where: {
        content: "TEST COMMENT",
      },
    });

    request.close();
  });

  it("get all hobbies", async () => {
    //Setup
    const allHobbies = await Hobby.findAll({
      raw: true,
      attributes: ["id", "name", "mainPicture", "period", "cost"],
      include: [
        {
          model: Category,
          as: "Categories",
          required: false,
          attributes: ["name"],
        },
      ],
    });

    //Exercise
    const res = await request.get("/api/hobby");

    //Assert
    res.should.have.status(200);
    res.should.be.json;
    assert.equal(res.body[0].name, allHobbies[0].name);
    assert.equal(res.body[0].cost, allHobbies[0].cost);
    assert.equal(res.body[0][Category.name], allHobbies[0][Category.name]);

    //Teardown
  });

  it("get hobby", async () => {
    //Setup
    const specificHobby = await Hobby.findAll({
      raw: true,
      where: {
        id: 1,
      },
      include: [
        {
          model: Comment,
          as: "Comments",
          required: false,
          attributes: ["content"],
        },
        {
          model: Goods,
          as: "Goods",
          required: false,
          attributes: ["goodsName", "goodsPicture"],
        },
        {
          model: SubPicture,
          as: "SubPictures",
          required: false,
          attributes: ["subPicture", "description"],
        },
        {
          model: Video,
          as: "Videos",
          required: false,
          attributes: ["videoURL", "description"],
        },
      ],
    });

    //Exercise
    const res = await request.get("/api/hobby/1");
    //Assert
    res.should.have.status(200);
    res.should.be.json;
    assert.equal(
      res.body[0][Goods.goodsName],
      specificHobby[0][Goods.goodsName]
    );
    assert.equal(
      res.body[0][Video.description],
      specificHobby[0][Video.description]
    );
    assert.equal(
      res.body[0][SubPicture.description],
      specificHobby[0][SubPicture.description]
    );

    //Teardown
  });

  it("get all comments", async () => {
    //Setup
    const reqHobbyId = 1;
    const allComments = await Comment.findAll({
      raw: true,
      where: {
        hobbyId: reqHobbyId,
      },
      include: [
        {
          model: NacomerUser,
          as: "NacomerUser",
          required: false,
          attributes: ["id", "googleId", "name", "picture"],
        },
      ],
      order: [
        ["createdAt", "DESC"],
        ["id", "ASC"],
      ],
      attributes: ["id", "content", "createdAt", "updatedAt"],
    });

    const expectComments = allComments.map((comment) => {
      const expectUser = {
        id: comment["NacomerUser.id"],
        googleId: comment["NacomerUser.googleId"],
        name: comment["NacomerUser.name"],
        picture: comment["NacomerUser.picture"],
      };
      const expectData = {
        id: comment.id,
        content: comment.content,
        createdAt: comment.createdAt.toJSON(),
        updatedAt: comment.updatedAt.toJSON(),
        NacomerUser: expectUser,
      };
      return expectData;
    });

    //Exercise
    const res = await request.get("/api/hobby/1/comment");

    //Assert
    res.should.have.status(200);
    res.should.be.json;
    res.body.should.deep.equal(expectComments);
    //Teardown
  });

  it("post comments", async () => {
    //Setup

    const expect = "ゴルフ場は埼玉が安くてよい";
    const postComment = {
      hobbyId: 1,
      content: "ゴルフ場は埼玉が安くてよい",
    };
    const googleId = "AAA";

    // Exercise
    // const auth = testLogin.body.token;
    const res = await request
      .post("/api/hobby/1/comment")
      .set({ "x-googleid": googleId })
      .send(postComment);

    //Assert
    res.should.have.status(201);
    res.should.be.json;
    assert.equal(res.body.content, expect);

    //Teardown
    await Comment.destroy({
      where: {
        content: "ゴルフ場は埼玉が安くてよい",
      },
    });
  });

  it("put comment", async () => {
    //Setup
    const expect = "ゴルフ場は実は千葉も良い";
    const putComment = {
      content: expect,
    };

    //Exercise
    const res = await request
      .put("/api/comment/" + TEST_COMMENT_ID)
      .send(putComment);

    //Assert
    res.should.have.status(200);
    res.should.be.json;
    assert.equal(res.body.content, expect);

    //Teardown
    await Comment.destroy({
      where: {
        content: expect,
      },
    });
  });

  it("delete comments", async () => {
    //Setup

    //Exercise
    const res = await request.delete("/api/comment/" + TEST_COMMENT_ID);

    //Assert
    res.should.have.status(204);

    //Teardown
  });

  it("User login(post:first login)", async () => {
    //Setup

    const tempUser = {
      googleId: "testtesttest@gmail.com",
      userName: "John Doe",
      picture:
        "https://xxx.googleusercontent.com/-xxxx/xxx/xxx/xxx/xxx/photo.jpg",
    };

    //Exercise
    const res = await request.post("/api/user/login").send(tempUser);

    //Assert
    res.should.have.status(201);

    //Teardown
    const deleteUser = await NacomerUser.findOne({
      where: {
        googleId: tempUser.googleId,
      },
    });
    await deleteUser.destroy();
  });

  it("User login(post:second login)", async () => {
    const tempUser = {
      googleId: "testJohnDoe@gmail.com",
      userName: "John Doe the second",
      picture:
        "https://xxx.googleusercontent.com/-xxxx/xxx/xxx/xxx/xxx/photo.jpg",
    };

    //Exercise
    const firstRes = await request.post("/api/user/login").send(tempUser);
    const secondRes = await request.post("/api/user/login").send(tempUser);

    //Assert
    firstRes.should.have.status(201);
    secondRes.should.have.status(200);

    //Teardown
    const deleteUser = await NacomerUser.findOne({
      where: {
        googleId: tempUser.googleId,
      },
    });
    await deleteUser.destroy();
  });
});
