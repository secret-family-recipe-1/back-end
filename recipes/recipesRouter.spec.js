// const supertest = require("supertest");
// const server = require("../api/server.js");
// const db = require("../data/dbconfig.js");


      
//       /// WORKS WELL//

//     describe('GET recipes by Id ', () => {
//         it('returns recipe', () => {
//           return supertest(server)
//             .get('/api/recipes/1')
//             .then(res => {
//               expect(res.status).toBe(200);
//             });
//         });
//         it('returns a 400 if the recipe is not found', () => {
//           return supertest(server)
//             .get('/api/recipes/666')
//             .then(res => {
//               expect(res.status).toBe(400);
//             });
//         });
//       });

//       describe('GET recipes by Category', () => {
//         it('returns category recipe', () => {
//           return supertest(server)
//             .get('/api/recipes/italian')
//             .then(res => {
//               expect(res.status).toBe(200);
//             });
//         });
//         it('returns a 400 if the recipe is not found', () => {
//           return supertest(server)
//             .get('/api/recipes/ethiopian')
//             .then(res => {
//               expect(res.status).toBe(400);
//             });
//         });
//       });
    

const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

beforeEach(async () => {
    await db("recipes").truncate();
    await db("users").truncate();
  });


const recipe = {
    title: "Cake",
    source: "Monica",
    instructions: "Mix ingredients together, place in over for 45 minutes at 450 degrees",
    ingredients: "milk, eggs, flour",
    category: "dessert",
    img_url: null,
    user_id: 1
  }

const recipe2 = {
    title: "Pizza",
    source: "Thomas",
    instructions: "Knead flour into circle, spread tomato sauce, cheese and pepperoni, place in oven",
    ingredients: "cheese, tomato sauce flour, pepperoni",
    category: "italian",
    img_url: null,
    user_id: 2
  }

const id = 1;

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

// describe("DELETE /api/recipe/:id", () => {
//     it("returns 200 code and token", async () => {
//         await supertest(server)
//         .post("/api/auth/register")
//         .send({ username: "test", password: "recipes", location: "BR", name: "Lou" })
//         .then(async () => {
//             await supertest(server)
//                 .post("/api/auth/login")
//                 .send({ username: "test", password: "recipes" })
//                 .then(async (res) => {
//                     const token = res.body.token;
//                     await db("recipes").send(recipe);
//                     await supertest(server)
//                     .delete(recipe)
//                     .set("Authorization", token)
//                     .expect(200);
//                 })

//         })
//     })

// })