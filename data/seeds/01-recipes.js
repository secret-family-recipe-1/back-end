
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
        img_url: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg",
        user_id: 1,
        },
        {
          id: 2, 
          title: 'Pizza',
          source: 'Thomas',
          ingredients: 'cheese, tomato sauce flour, pepperoni',
          instructions: 'Knead flour into circle, spread tomato sauce, cheese and pepperoni, place in oven',
          category: "italian",
          img_url: "https://sicilysdetroit.com/jsimages/26165552_767529830108628_6459179220231421963_n.jpg",
          user_id: 2,
          },
      ]);
    });
};
