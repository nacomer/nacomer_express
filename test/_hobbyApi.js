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
    beforeEach(() => {
        request = chai.request(server);
    })

    it("get all hobbies", async () => {
        //Setup
        const allHobbies = await Hobby.findAll({
            raw: true, 
            attributes: ['id', 'name', 'mainPicture', 'period']
        });

        // const allHobbiesJson = allHobbies.map(hobby => hobby.dataValues);

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
                    required: true,
                    attributes: ['content']
                }, {
                    model: Goods, as: 'Goods',
                    required: true,
                    attributes: ['goodsName', 'goodsPicture']
                }, {
                    model: SubPicture, as: 'SubPictures',
                    required: true,
                    attributes: ['subPicture']
                }, {
                    model: Video, as: 'Videos',
                    required: true,
                    attributes: ['videoURL']
                }]
        }
        );

        //Exercise
        const res = await request.get("/api/hobby/1");
        //Assert
        assert.equal(res.body[0][Goods.goodsName], specificHobby[0][Goods.goodsName]);
        //Teardown
    });
});