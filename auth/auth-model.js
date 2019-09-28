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

  try {if (id) {
  const newUser = await findById(id);
  return newUser }
} catch(error) {
  console.log(error)
}
}


function findById(id) {
  return db('login')
    .where({ id })
    .first();
}