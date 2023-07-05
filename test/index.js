import {
    describe,
    it,
    before,
    after
} from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import chaiJson from "chai-json-schema";
import request from "supertest";

import app from "../index.js";

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect;

let server;
before((done) => {
    server = app.listen(0, done);
});

describe("check if the server is up and running", () => {
    after((done) => {
        server.close(done);
    });

    it("should return 200", (done) => {
        request(server)
            .get("/users").expect(200, done);
    });
});
describe("check userController behaviour", () => {
    let createdUserId;

    it("should return an array of users", (done) => {
        chai
            .request(server)
            .get("/users")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });

    it("should create a user", (done) => {
        chai.request(server)
            .post("/users")
            .send({ name: "estean", email: "piti@example", age: 40 })
            .end((err, res) => {
                console.log(res);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                createdUserId = res.body.id;
                done();
            });
    });

    it("should return an error message creating user", (done) => {
        chai.request(server)
            .post("/users")
            .send({})
            .end((err, res) => {
                expect(res.body)
                    .to.be.an("object")
                    .that.has.property("message", "OzMap - You must provide the name.");
                done();
            });
    });

    it("should update a user", (done) => {
        chai.request(server)
            .patch(`/users/${createdUserId}`)
            .send({ name: "Antony", email: "antony@example.com", age: 22 })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it("should fail because there is no userId related", (done) => {
        const userId = null;
        chai.request(server)
            .patch(`/users/${userId}`)
            .send({})
            .end((err, res) => {
                expect(res.body)
                    .to.be.an("object")
                    .that.has.property("message", "OZMap - User not found");
                done();
            });
    });

    it("should fail because there is no body", (done) => {
        chai.request(server)
            .patch(`/users/${createdUserId}`)
            .send({})
            .end((err, res) => {
                expect(res.body)
                    .to.be.an("object")
                    .that.has.property("message", "OzMap - You must provide the name");
                done();
            });
    });

    it("should delete an user", (done) => {
        chai.request(server)
            .delete(`/users/${createdUserId}`)
            .send({})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});
