const chai = require('chai');
const chaiHttp = require('chai-http');
const Hobby = require('../models').Hobby;
const Comment = require('../models').Comment;
const Video = require('../models').Video;
const SubPicture = require('../models').SubPicture;
const Goods = require('../models').Goods;
const assert = chai.assert;
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../app');
const http = require('http');
chai.should();

describe("Hobby Api Server", () => {
    const server = http.createServer(app);
    let request;
    let TEST_COMMENT_ID;

    beforeEach( async () => {
        request = chai.request(server);

        const comment = await Comment.create({
            hobbyId: 1,
            content: "TEST COMMENT"
        });
        TEST_COMMENT_ID = comment.id;
        return comment;
    });

    afterEach( async () => {
        await Comment.destroy({
            where: {
                content: "TEST COMMENT"
            }
        });
    });

    it("get all hobbies", async () => {
        //Setup
        const allHobbies = await Hobby.findAll({
            raw: true,
            attributes: ['id', 'name', 'mainPicture', 'period']
        });

        //Exercise
        const res = await request.get("/api/hobby");

        //Assert
        res.should.have.status(200);
        res.should.be.json;
        JSON.parse(res.text).should.deep.equal(allHobbies);

        //Teardown
    });

    it("get hobby", async () => {
        //Setup
        const specificHobby = await Hobby.findAll({
            raw: true,
            where: {
                id: 1
            },
            include: [
                {
                    model: Comment, as: 'Comments',
                    required: false,
                    attributes: ['content']
                }, {
                    model: Goods, as: 'Goods',
                    required: false,
                    attributes: ['goodsName', 'goodsPicture']
                }, {
                    model: SubPicture, as: 'SubPictures',
                    required: false,
                    attributes: ['subPicture']
                }, {
                    model: Video, as: 'Videos',
                    required: false,
                    attributes: ['videoURL']
                }]
        }
        );

        //Exercise
        const res = await request.get("/api/hobby/1");
        //Assert
        res.should.have.status(200);
        res.should.be.json;
        // JSON.parse(res.text).should.deep.equal(specificHobby);
        assert.equal(res.body[0][Goods.goodsName], specificHobby[0][Goods.goodsName]);
        
        //Teardown
    });

    it("get all comments", async () => {
        //Setup
        const allComments = await Comment.findAll({
            raw: true,
            where: {
                hobbyId: 1
            },
            attributes: ['id', 'content']
        }
        );

        //Exercise
        const res = await request.get("/api/hobby/1/comment");

        //Assert
        res.should.have.status(200);
        res.should.be.json;
        JSON.parse(res.text).should.deep.equal(allComments);

        //Teardown
    });

    it("post comments", async () => {
        //Setup
        const expect = "ゴルフ場は埼玉が安くてよい";
        const postComment = {
            hobbyId:1,
            content:"ゴルフ場は埼玉が安くてよい"
        }

        //Exercise
        const res = await request.post("/api/hobby/1/comment").send(postComment);

        //Assert
        res.should.have.status(201);
        res.should.be.json;
        // JSON.parse(res.body.content).to.be.equal(postComment);
        assert.equal(res.body.content, expect);

        //Teardown
        await Comment.destroy({
            where: {
                content: "ゴルフ場は埼玉が安くてよい"
            }
        });
    });

    it("put comment", async () => {
        //Setup
        const expect = "ゴルフ場は実は千葉も良い";
        const putComment = {
            content: expect
        }

        //Exercise
        const res = await request.put("/api/hobby/comment/"+ TEST_COMMENT_ID).send(putComment);

        //Assert
        res.should.have.status(200);
        res.should.be.json;
        // JSON.parse(res.body.content).to.be.equal(postComment);
        assert.equal(res.body.content, expect);

        //Teardown
        await Comment.destroy({
            where: {
                content: expect
            }
        });
    });

    it("delete comments", async () => {
        //Setup

        //Exercise
        const res = await request.delete("/api/hobby/comment/"+ TEST_COMMENT_ID);

        //Assert
        res.should.have.status(204);

        //Teardown
    });

});