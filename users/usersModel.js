const db = require('../data/dbconfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
};

function find() {
    return db('users')
    .select("id", "username", "name", "location");
}

function findBy(filter) {
    return db("users").where(filter);
}

function findById(id) {
    return db("users").where({ id }).first();
  }
  

async function add(user){
    const [id] = await db("users").insert(user, "id");
    return findById(id);
}

function update(id, changes) {
    return db("users").update(changes).where({ id });
}

function remove(id) {
    return db('users').delete().where({ id });
}