
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'cole', password: 'cole', location: "NY", name: "Nicole",},
        {id: 2, username: 'tim', password: 'tim', location: "CA", name: "Timothy",},
        {id: 3, username: 'vicky', password: 'vicky', location: "SC", name: "Victoria",},
      ]);
    });
};
