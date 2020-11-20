const chai = require('chai');
const chaiHttp = require('chai-http');
const Hobby = require('../models').Hobby;
const Comment = require('../models').Commnet;
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
            attributes: ['id', 'name', 'mainPicture', 'period']
        });

        const allHobbiesJson = allHobbies.map(hobby => hobby.dataValues);

        //Exercise
        const res = await request.get("/api/hobby");

        //Assert
        res.should.have.status(200);
        res.should.be.json;
        // assert.deepEqual(res.body, allHobbies);
        JSON.parse(res.text).should.deep.equal(allHobbiesJson);
        JSON.parse(res.text).length.should.equal(allHobbies.length);

        //Teardown
    });

    it("get hobby", async () => {
        //Setup
        // const specificHobby = await Hobby.findAll({
        //     where: {
        //         id:1
        //     },
        //     include: [
        //         {
        //             model: Comment, as: 'Comments',
        //             required: false
        //         }, {
        //             model: Goods, as: 'Goods',
        //             required: true
        //         }, {
        //             model: SubPicture, as: 'SubPictures',
        //             required: true
        //         }, {
        //             model: Video, as: 'Videos',
        //             required: true
        //         }]
        // }
        // );
        //Exercise
        const res = await request.get("/api/hobby/1");
        //Assert
        // JSON.parse(res.text).goodsName.should.deep.equal("driver");
        console.log(res.body);
        assert.equal(res.body.Goods.goodsName,"driver")
        //Teardown
    });
});