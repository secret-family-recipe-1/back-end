exports.up = function(knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments();
            tbl.string("username", 130).notNullable().unique();
            tbl.string("password", 130).notNullable();
            tbl.string("location").notNullable();
            tbl.string("name").notNullable();
        })

        .createTable("recipes", tbl => {
            tbl.increments();
            tbl.string("title").notNullable();
            tbl.string("source").notNullable();
            tbl.string("instructions").notNullable();
            tbl.string("ingredients").notNullable();
            tbl.string("category").notNullable();
            tbl.string('img_url')
            tbl.integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })

        .createTable("users_recipes", tbl => {
            tbl.increments();
            tbl.integer("users_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.integer("recipes_id")
                .unsigned()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users_recipes')
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
  
};
