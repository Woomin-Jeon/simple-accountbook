const request = require('supertest');

const app = require('../app');

const jwt = require('jsonwebtoken');

require('dotenv').config();

describe('breakdown', () => {
  describe('POST /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const user = { id: 'boost', pw: 'camp' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .post('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(200);
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const user = { id: 'invalid_id', pw: 'invalid_pw' };
        const invalidToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .post('/breakdown')
          .set('Authorization', `Bearer ${invalidToken}`)
          .expect(401);
      });
    });
  });
});
