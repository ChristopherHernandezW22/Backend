const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('login').select('id', 'username');
}

function findBy(filter) {
  return db('login').where(filter);
}

async function add(user) {
  const [id] = await db('login').insert(user).returning('id')

  return findById(id);
}

function findById(id) {
  return db('login')
    .where({ id })
    .first();
}