const request = require('supertest');

const app = require('../app');

const jwt = require('jsonwebtoken');

require('dotenv').config();

describe('breakdown', () => {
  const validUser = { id: 'boost', pw: 'camp' };
  const invalidUser = { id: 'invalid_id', pw: 'invalid_pw' };
  let breakdownId;

  describe('GET /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses breakdowns by user', async () => {
        const validToken = jwt.sign(validUser, process.env.JWT_SECRET);

        const response = await request(app)
          .get('/breakdown')
          .set('Authorization', `Bearer ${validToken}`);

        expect(response.body.breakdowns).toBeDefined();
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const invalidToken = jwt.sign(invalidUser, process.env.JWT_SECRET);

        await request(app)
          .get('/breakdown')
          .set('Authorization', `Bearer ${invalidToken}`)
          .expect(401);
      });
    });
  });

  describe('POST /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const validToken = jwt.sign(validUser, process.env.JWT_SECRET);

        const response = await request(app)
          .post('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(200);

        breakdownId = response.body.breakdownId;
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const invalidToken = jwt.sign(invalidUser, process.env.JWT_SECRET);

        await request(app)
          .post('/breakdown')
          .set('Authorization', `Bearer ${invalidToken}`)
          .expect(401);
      });
    });
  });

  describe('PATCH /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const validToken = jwt.sign(validUser, process.env.JWT_SECRET);

        await request(app)
          .patch('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(200);
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const invalidToken = jwt.sign(invalidUser, process.env.JWT_SECRET);

        await request(app)
          .patch('/breakdown')
          .set('Authorization', `Bearer ${invalidToken}`)
          .expect(401);
      });
    });
  });

  describe('DELETE /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const validToken = jwt.sign(validUser, process.env.JWT_SECRET);

        await request(app)
          .delete('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .send({ breakdownId })
          .expect(200);
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const invalidToken = jwt.sign(invalidUser, process.env.JWT_SECRET);

        await request(app)
          .delete('/breakdown')
          .set('Authorization', `Bearer ${invalidToken}`)
          .send({ breakdownId })
          .expect(401);
      });
    });
  });
});
