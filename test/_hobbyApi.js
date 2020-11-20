// import chai from "chai";
const chai = require('chai');
const chaiHttp = require('chai-http');
// import chaiHttp from "chai-http";
const Hobby = require('../models').Hobby;
const assert = chai.assert;

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
        console.log("allhobies : " + allHobbies.leg);
        //Exercise
        const res = await request.get("/api/hobby");

        //Assert
        res.should.have.status(200);
        res.should.be.json;
        // assert.deepEqual(res.body, allHobbies);
        // JSON.parse(res.text).should.deep.equal(allHobbies);

        //Teardown
    });
});