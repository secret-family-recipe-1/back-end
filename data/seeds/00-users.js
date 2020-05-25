
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'cole', password: 'cole'},
        {id: 2, username: 'tim', password: 'tim'},
        {id: 3, username: 'vicky', password: 'vicky'},
      ]);
    });
};
