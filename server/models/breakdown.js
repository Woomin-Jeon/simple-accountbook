const pool = require('./index');

const addBreakdown = ({
  id, amount, content, method, come, date, userId, categoryId,
}) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `INSERT INTO breakdown (id, amount, content, method, come, date, userId, categoryId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [id, amount, content, method, come, date, userId, categoryId], (error) => {
      if (error) {
        reject(error);
      }

      resolve(true);
    });

    connection.release();
  });
});

module.exports = { addBreakdown };
