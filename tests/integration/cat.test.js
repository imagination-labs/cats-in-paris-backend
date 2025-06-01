const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Cat routes', () => {
  describe('GET /api/v1/cat', () => {
    test('should return 201 and a cat object', async () => {
      const res = await request(app)
        .get('/api/v1/cat')
        .expect(httpStatus.OK);

      expect(res.body).toMatchObject({
        image: expect.any(String),
        caption: expect.any(String),
      });
    });
  });

  describe('Error handling', () => {
    test('should return 404 for non-existent routes', async () => {
      await request(app)
        .get('/api/v1/cat/invalid')
        .expect(httpStatus.NOT_FOUND);
    });

    test('should return 404 for invalid HTTP methods', async () => {
      await request(app)
        .post('/api/v1/cat')
        .expect(httpStatus.NOT_FOUND);
    });
  });
});
