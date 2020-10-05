const pool = require('./index');

const { checkError } = require('./util');

const getBreakdowns = (userId) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `
      SELECT
      breakdown.id, amount, content, method, breakdown.come, date, category.name as category
      FROM breakdown
      LEFT JOIN category ON breakdown.categoryId = category.id
      WHERE userId=?
    `;
    const params = [userId];

    connection.query(query, params, (error, data) => {
      checkError(error, reject);
      resolve(data);
    });

    connection.release();
  });
}).catch(error => console.error(error));

const addBreakdown = ({
  id, amount, content, method, come, date, userId, categoryId,
}) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `
      INSERT INTO breakdown
      (id, amount, content, method, come, date, userId, categoryId)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [id, amount, content, method, come, date, userId, categoryId];

    connection.query(query, params, (error) => {
      checkError(error, reject);
      resolve(true);
    });

    connection.release();
  });
});

const updateBreakdown = ({
  breakdownId, amount, content, method, come, date, userId, categoryId,
}) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `
      UPDATE breakdown
      SET amount=?, content=?, method=?, come=?, date=?, categoryId=?
      WHERE id=? and userId=?`;
    const params = [amount, content, method, come, date, categoryId, breakdownId, userId];

    connection.query(query, params, (error) => {
      checkError(error, reject);
      resolve(true);
    });

    connection.release();
  });
});

const deleteBreakdown = (userId, breakdownId) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `
      DELETE FROM breakdown
      WHERE userId=? and id=?
    `;
    const params = [userId, breakdownId];

    connection.query(query, params, (error) => {
      checkError(error, reject);
      resolve(true);
    });

    connection.release();
  });
});

module.exports = { getBreakdowns, addBreakdown, updateBreakdown, deleteBreakdown };
