const request = require('supertest');

const app = require('../app');

const jwt = require('jsonwebtoken');

require('dotenv').config();

describe('breakdown', () => {
  let breakdownId;

  describe('GET /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses breakdowns by user', async () => {
        const user = { id: 'boost', pw: 'camp' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        const response = await request(app)
          .get('/breakdown')
          .set('Authorization', `Bearer ${validToken}`);

        expect(response.body.breakdowns).toBeDefined();
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const user = { id: 'invalid_id', pw: 'invalid_pw' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .get('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(401);
      });
    });
  });

  describe('POST /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const user = { id: 'test', pw: 'test' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        const response = await request(app)
          .post('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(200);

        breakdownId = response.body.breakdownId;
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

  describe('PATCH /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const user = { id: 'test', pw: 'test' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .patch('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(200);
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const user = { id: 'invalid_id', pw: 'invalid_pw' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .patch('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .expect(401);
      });
    });
  });

  describe('DELETE /breakdown', () => {
    describe('with valid JWT token', () => {
      it('responses 200', async () => {
        const user = { id: 'test', pw: 'test' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .delete('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .send({ breakdownId })
          .expect(200);
      });
    });

    describe('with invalid JWT token', () => {
      it('responses 401', async () => {
        const user = { id: 'invalid_id', pw: 'invalid_pw' };
        const validToken = jwt.sign(user, process.env.JWT_SECRET);

        await request(app)
          .delete('/breakdown')
          .set('Authorization', `Bearer ${validToken}`)
          .send({ breakdownId })
          .expect(401);
      });
    });
  });
});
