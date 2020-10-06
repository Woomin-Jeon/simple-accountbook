const queryPromise = require('./index');

const getBreakdowns = (userId) => {
  const query = `SELECT
    breakdown.id, amount, content, method, breakdown.come, date, category.name as category
    FROM breakdown
    LEFT JOIN category ON breakdown.categoryId = category.id
    WHERE userId=?`;
  const params = [userId];

  return queryPromise(query, params, (data, resolve) => resolve(data));
};

const addBreakdown = ({
  id, amount, content, method, come, date, userId, categoryId,
}) => {
  const query = `INSERT INTO breakdown
    (id, amount, content, method, come, date, userId, categoryId)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [id, amount, content, method, come, date, userId, categoryId];

  return queryPromise(query, params, (data, resolve) => resolve(true));
};

const updateBreakdown = ({
  breakdownId, amount, content, method, come, date, userId, categoryId,
}) => {
  const query = `
    UPDATE breakdown
    SET amount=?, content=?, method=?, come=?, date=?, categoryId=?
    WHERE id=? and userId=?`;
  const params = [amount, content, method, come, date, categoryId, breakdownId, userId];
  return queryPromise(query, params, (data, resolve) => resolve(true));
};

const deleteBreakdown = (userId, breakdownId) => {
  const query = `DELETE FROM breakdown WHERE userId=? and id=?`;
  const params = [userId, breakdownId];

  return queryPromise(query, params, (data, resolve) => resolve(true));
};

const getBreakdownsByMonth = (userId, month) => {
  const query = `SELECT
    breakdown.id, amount, content, method, breakdown.come, date, category.name as category
    FROM breakdown
    LEFT JOIN category ON breakdown.categoryId = category.id
    WHERE userId=? and month(date)=?`;
  const params = [userId, month];

  return queryPromise(query, params, (data, resolve) => resolve(data));
};

module.exports = {
  getBreakdowns, addBreakdown, updateBreakdown, deleteBreakdown, getBreakdownsByMonth,
};
