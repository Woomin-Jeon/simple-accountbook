const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST_IP,
  user: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 20,
});

module.exports = pool;
