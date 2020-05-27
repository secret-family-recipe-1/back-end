// const supertest = require("supertest");
// const server = require("../api/server.js");
// const db = require("../data/dbconfig.js");

// // beforeEach(async () => {
// //     await db("users").truncate();
// //   });


//     describe("GET /", () => {
//       it("should return 200 ", async () => {
//         const res = await supertest(server).get("/api/users");
//         expect(res.status).toBe(200);
//       });
//     });

const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

beforeEach(async () => {
    await db("users").truncate();
  });

  const user1 = {
    username: "cole",
    location: "NY",
    name: "Nicole"
  }

  const user2 = {
    username: "tim",
    location: "CA",
    name: "Timothy"
  }

  const user3 = {
    username: "vicky",
    location: "SC",
    name: "Victoria"
  }



describe("GET /api/users", () => {
    it("returns 400 code: no token", async () => {
      await supertest(server).get("/api/recipes").expect(400);
    });
    it("returns 200 code and token", async () => {
      await supertest(server)
        .post("/api/auth/register")
        .send({ username: "test", password: "recipes", location: "BR", name: "Lou" })
        .then(async () => {
          await supertest(server)
            .post("/api/auth/login")
            .send({ username: "test", password: "recipes" })
            .then(async (res) => {
              const token = res.body.token;
              await supertest(server)
                .get("/api/users")
                .set("Authorization", token)
                .expect(200)
                .expect(Array);
            });
        });
    });
  });