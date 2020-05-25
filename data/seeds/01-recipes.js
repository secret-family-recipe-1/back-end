
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {
        id: 1, 
        title: 'Cake',
        source: 'Monica',
        ingredients: 'milk, eggs, flour',
        instructions: 'Mix ingredients together, place in over for 45 minutes at 450 degrees',
        category: "dessert",
        user_id: 1,
        },
        {
          id: 2, 
          title: 'Pizza',
          source: 'Thomas',
          ingredients: 'cheese, tomato sauce flour, pepperoni',
          instructions: 'Knead flour into circle, spread tomato sauce, cheese and pepperoni, place in oven',
          category: "italian",
          user_id: 2,
          },
      ]);
    });
};
