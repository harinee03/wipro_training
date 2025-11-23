const request = require("supertest");
const expect = require("chai").expect;
const app = require("../index");

describe("Users API", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});
