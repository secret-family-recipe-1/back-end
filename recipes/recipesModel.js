const db = require('../data/dbconfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    getById,
    getByCategory,
};

function getAll() {
    return db('recipes')
}

function getById(id) {
    return db("recipes").where({ id }).first();
}

function insert(recipe){
    return db('recipes')
    .insert(recipe, "id");
}

function update(id, changes) {
    return db("recipes").update(changes).where({ id });
}

function remove(id) {
    return db('recipes').delete().where({ id });
}

function getByCategory(filter){
    return db('recipes').where(filter);
}