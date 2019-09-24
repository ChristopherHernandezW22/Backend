const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('employees').select('id', 'username');
}

function findBy(filter) {
  return db('employees').where(filter);
}

async function add(user) {
  const [id] = await db('employees').insert(user);

  return findById(id);
}

function findById(id) {
  return db('employees')
    .where({ id })
    .first();
}