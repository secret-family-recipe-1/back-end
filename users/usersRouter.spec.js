const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbconfig.js");

// beforeEach(async () => {
//     await db("users").truncate();
//   });


    describe("GET /", () => {
      it("should return 200 ", async () => {
        const res = await supertest(server).get("/api/users");
        expect(res.status).toBe(200);
      });
    });