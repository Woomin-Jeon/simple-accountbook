const pool = require('./index');

const { checkError } = require('./util');

const checkPassword = (id, pw) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `
      SELECT id, pw 
      FROM user 
      WHERE id=?`;
    const params = [id];

    connection.query(query, params, (error, data) => {
      checkError(error, reject);

      const [user] = data;
      user && user.pw === pw ? resolve({ ...user }) : resolve(null);
    });

    connection.release();
  });
});

module.exports = { checkPassword };
