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

const updateBreakdown = ({
  breakdownId, amount, content, method, come, date, userId, categoryId,
}) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `UPDATE breakdown SET
      amount=?, content=?, method=?, come=?, date=?, categoryId=?
      WHERE id=? and userId=?`;
    const params = [amount, content, method, come, date, categoryId, breakdownId, userId];
    connection.query(query, params, (error) => {
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

module.exports = { getBreakdowns, addBreakdown, updateBreakdown, deleteBreakdown };
