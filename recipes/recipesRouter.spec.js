const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

// beforeEach(async () => {
//     await db("recipes").truncate();
//     await db("users").truncate();
//   });


const recipe = {
    id: 1,
    title: "Cake",
    source: "Monica",
    instructions: "Mix ingredients together, place in over for 45 minutes at 450 degrees",
    ingredients: "milk, eggs, flour",
    category: "dessert",
    img_url: null,
    user_id: 1
  }

const recipe2 = {
    id: 2,
    title: "Pizza",
    source: "Thomas",
    instructions: "Knead flour into circle, spread tomato sauce, cheese and pepperoni, place in oven",
    ingredients: "cheese, tomato sauce flour, pepperoni",
    category: "italian",
    img_url: null,
    user_id: 2
  }


describe("GET /api/recipes", () => {
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
              .get("/api/recipes")
              .set("Authorization", token)
              .expect(200)
              .expect(Array);
          });
      });
  });
});

describe("GET /api/recipes/id/:id", () => {
  it("returns 200 with valid token", async () => {
    await supertest(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "recipes", location: "AZ", name: 'Tex' })
      .then(async () => {
        await supertest(server)
          .post("/api/auth/login")
          .send({ username: "test", password: "recipes" })
          .then(async (res) => {
            const token = res.body.token;
            await supertest(server)
              .get("/api/projects/id/1")
              .set("Authorization", token)
              .then((response) => {
                expect(200)
              });
          });
      });
  });
});


describe("GET /api/recipes/category/:category", () => {
  it("returns 200 with valid token", async () => {
    await supertest(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "recipes", location: "AZ", name: 'Tex' })
      .then(async () => {
        await supertest(server)
          .post("/api/auth/login")
          .send({ username: "test", password: "recipes" })
          .then(async (res) => {
            const token = res.body.token;
            await supertest(server)
              .get("/api/projects/category/dessert")
              .set("Authorization", token)
              .then((response) => {
                expect(200)
              });
          });
      });
  });
});



describe("POST /api/recipes", () => {
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
                    .get("/api/recipes")
                    .set("Authorization", token)
                    .send(recipe)
                    .expect(200);
                })

        })
    })

})


describe("DELETE /api/recipes/:id", () => {
  it("returns 200 OK w/ token", async () => {
    await supertest(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "recipes", location: "BY", name: "Timothy" })
      .then(async () => {
        await supertest(server)
          .post("/api/auth/login")
          .send({ username: "test", password: "recipes" })
          .then(async (res) => {
            const token = res.body.token;
            await supertest(server)
              .delete('/api/recipes/2')
              .set("Authorization", token)
              .expect(200);
          });
      });
  });
});

describe("PUT /api/recipes/:id", () => {
  it("returns 200 OK w/ token", async () => {
    await supertest(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "recipes", location: "BY", name: "Timothy" })
      .then(async () => {
        await supertest(server)
          .post("/api/auth/login")
          .send({ username: "test", password: "recipes" })
          .then(async (res) => {
            const token = res.body.token;
            await db("recipes").insert(recipe2);
            await supertest(server)
              .put(`/api/recipes/2`)
              .set("Authorization", token)
              .send(recipe2)
              .expect(200);
          });
      });
  });
});