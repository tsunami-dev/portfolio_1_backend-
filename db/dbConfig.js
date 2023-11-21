const pgp = require("pg-promise")();

// get access to the environment variables.
require("dotenv").config();

// configuration object.
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD
};

// connect to games_dev db
const db = pgp(cn);

module.exports = db;