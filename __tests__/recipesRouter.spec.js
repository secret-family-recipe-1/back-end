const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbconfig.js");

describe('recipes', () => {
        
    it('should return status 400 if not authorized', async () => {
      return supertest(server)
        .get('/api/recipes')
        .then(response =>
      expect(response.status).toBe(400));
});

})