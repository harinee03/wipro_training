const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const app = require("../index");

describe("Courses API", () => {
  it("should return all courses", async () => {
    const res = await chai.request(app).get("/api/courses");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});
