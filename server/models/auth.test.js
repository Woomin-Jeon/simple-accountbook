const { checkPassword } = require('./auth');

describe('auth', () => {
  describe('checkPassword', () => {
    describe('with valid user id and password', () => {
      it('returns true', async () => {
        const [id, pw] = ['boost', 'camp'];

        const user = await checkPassword(id, pw);

        expect(user).toEqual({ id: 'boost', pw: 'camp' });
      });
    });

    describe('with invalid user id or password', () => {
      it('returns true', async () => {
        const [id, pw] = ['invalid_id', 'invalid_pw'];

        const user = await checkPassword(id, pw);

        expect(user).toBe(null);
      });
    });
  });
});
