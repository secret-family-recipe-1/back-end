const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

// beforeEach(async () => {
//     await db("users").truncate();
//   });

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

  describe("DELETE /api/users/:id", () => {
    it("returns 200 OK w/ token", async () => {
      await supertest(server)
        .post("/api/auth/register")
        .send({ username: "jeff", password: "recipes45", location: "BY", name: "Timothy" })
        .then(async () => {
          await supertest(server)
            .post("/api/auth/login")
            .send({ username: "jeff", password: "recipes45" })
            .then(async (res) => {
              const token = res.body.token;
              await supertest(server)
                .delete('/api/users/3')
                .set("Authorization", token)
                .expect(200);
            });
        });
    });
  });

  describe("PUT /api/users/:id", () => {
    it("returns 200 OK w/ token", async () => {
      await supertest(server)
        .post("/api/auth/register")
        .send({ username: "kyle", password: "recipes1236", location: "BY", name: "Timothy" })
        .then(async () => {
          await supertest(server)
            .post("/api/auth/login")
            .send({ username: "kyle", password: "recipes1236" })
            .then(async (res) => {
              const token = res.body.token;
              await supertest(server)
                .put('/api/users/2')
                .set("Authorization", token)
                .send(user3)
                .expect(200);
            });
        });
    });
  });