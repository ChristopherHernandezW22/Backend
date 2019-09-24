const knex = require("knex")('production');

const config = require("../knexfile");

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config.development[dbEnv]);