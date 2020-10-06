const queryPromise = require('./index');

const checkPassword = (id, pw) => {
  const query = `SELECT id, pw FROM user WHERE id=?`;
  const params = [id];

  return queryPromise(query, params, (data, resolve) => {
    const [user] = data;
    user && user.pw === pw ? resolve({ ...user }) : resolve(null);
  });
};

module.exports = { checkPassword };
