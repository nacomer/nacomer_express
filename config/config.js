require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database: "nacomer",
    host: "localhost",
    dialect: "postgres",
    loglevel: "debug",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    loglevel: "debug",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    loglevel: "debug",
  },
};
