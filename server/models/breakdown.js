const pool = require('./index');

const getBreakdowns = (userId) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `SELECT breakdown.id, breakdown.amount, breakdown.content, breakdown.method, breakdown.come, date, category.name FROM breakdown LEFT JOIN category ON breakdown.categoryId = category.id WHERE userId=?`;
    connection.query(query, [userId], (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });

    connection.release();
  });
});

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

const deleteBreakdown = (userId, breakdownId) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `DELETE FROM breakdown WHERE userId=? and id=?`;
    connection.query(query, [userId, breakdownId], (error) => {
      if (error) {
        reject(error);
      }

      resolve(true);
    });

    connection.release();
  });
});

module.exports = { getBreakdowns, addBreakdown, deleteBreakdown };
