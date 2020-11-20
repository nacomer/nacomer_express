const chai = require('chai');
const chaiHttp = require('chai-http');
const Hobby = require('../models').Hobby;
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
            attributes: ['id', 'name', 'mainPicture', 'periodId']
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

    it("get specific hobbies", async () => {
        //Setup
        //Exercise
        //Assert
        //Teardown
    });
});