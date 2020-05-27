const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbconfig.js");

// beforeEach(async () => {
//     await db("users").truncate();
//   });


    describe("auth-router.js", () => {
        describe("POST Register", () => {
          it("returns 200 code", async () => {
            return supertest(server)
              .post("/api/auth/register")
              .send({ username: "username12345", password: "password12345", location: "Mexico12345", name: "Lucas12345" })
              .expect(200);
          });
        });

        it("register invalid, return 500", () => {
            return supertest(server)
                .post("/api/auth/register")
                .send({ username: 'real', location: "AZ", name: "Fidel" })
                .then(response => {
                expect(response.status).toBe(500);
            });
        })
        
        it("returns JSON", () => {
            return supertest(server)
            .post('/api/auth/register')
            .send({ username: "username12345", password: "password12345", location: "Mexico12345", name: "Lucas12345" })
            .then(response => {
                expect(response.type).toMatch(/json/i);
            })
        })

    });

    describe('login', () => {
        it("login valid, 200 code", () => {
            return supertest(server)
            .post('/api/auth/login')
            .send({ username: "username12345", 
            password: "password12345", 
        })
        .then(response => {
            expect(response.status).toBe(200);
        })
        })
    })
