const mysql = require('mysql');

require('dotenv').config();

const { checkError } = require('./util');

const pool = mysql.createPool({
  host: process.env.DB_HOST_IP,
  user: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 20,
});

const queryPromise = (query, params, callback) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    connection.query(query, params, (error, data) => {
      checkError(error, reject);
      callback(data, resolve);
    });

    connection.release();
  });
});

module.exports = queryPromise;
