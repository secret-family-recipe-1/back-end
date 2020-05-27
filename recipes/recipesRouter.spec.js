const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbconfig.js");



    describe("GET /", () => {
      it("should return 200 ", async () => {
        const res = await supertest(server).get("/api/recipes");
        expect(res.status).toBe(200);
      });
    });

    describe('Get recipes', () => {
        it('returns recipes', () => {
          return supertest(server)
            .get('/api/recipes')
            .then(res => {
              expect(res.body).toBeInstanceOf(Array);
            });
        });
      });


      
      /// WORKS WELL//

    describe('GET recipes by Id ', () => {
        it('returns recipe', () => {
          return supertest(server)
            .get('/api/recipes/1')
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
        it('returns a 400 if the recipe is not found', () => {
          return supertest(server)
            .get('/api/recipes/666')
            .then(res => {
              expect(res.status).toBe(400);
            });
        });
      });

      describe('GET recipes by Category', () => {
        it('returns category recipe', () => {
          return supertest(server)
            .get('/api/recipes/italian')
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
        it('returns a 400 if the recipe is not found', () => {
          return supertest(server)
            .get('/api/recipes/ethiopian')
            .then(res => {
              expect(res.status).toBe(400);
            });
        });
      });
    

