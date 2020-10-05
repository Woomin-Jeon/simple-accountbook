const pool = require('./index');

const checkPassword = (id, pw) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    const query = `SELECT id, pw FROM user WHERE id=?`;
    connection.query(query, [id], (error, data) => {
      if (error) {
        reject(error);
      }

      const [user] = data;

      if (!user || user.pw !== pw) {
        resolve(null);
        return;
      }

      resolve({ ...user });
    });

    connection.release();
  });
});

module.exports = { checkPassword };
