const mysql = require('mysql');

const MYSQL = {};

// Get connection from a connection pool
MYSQL.getConnection = pool => new Promise((resolve, reject) => {
  pool.getConnection((poolerr, connection) => {
    if (poolerr) reject(poolerr);
    resolve(connection);
  });
});

// Execute query and return result
MYSQL.runQuery = (connection, query, params) => new Promise((resolve, reject) => {
  connection.query(query, params, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

module.exports = MYSQL;
