const request = require('supertest');

const app = require('../app');

describe('auth', () => {
  describe('POST /auth', () => {
    describe('with valid user id and password', () => {
      it('response 200', async () => {
        await request(app)
          .post('/auth')
          .send({ id: 'boost', pw: 'camp' })
          .expect(200);
      });
    });

    describe('with invalid user id or password', () => {
      it('response 401', async () => {
        await request(app)
          .post('/auth')
          .send({ id: 'invalid_id', pw: 'invalid_pw' })
          .expect(401);
      });
    });
  });
});
