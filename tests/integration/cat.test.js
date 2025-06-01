const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Cat routes', () => {
  describe('GET /api/cat', () => {
    test('should return 201 and a cat object', async () => {
      const res = await request(app)
        .get('/api/cat')
        .expect(httpStatus.CREATED);

      expect(res.body).toMatchObject({
        imageUrl: expect.any(String),
        expertDescription: expect.any(String),
      });
    });
  });

  describe('Error handling', () => {
    test('should return 404 for non-existent routes', async () => {
      await request(app)
        .get('/api/cat/invalid')
        .expect(httpStatus.NOT_FOUND);
    });

    test('should return 404 for invalid HTTP methods', async () => {
      await request(app)
        .post('/api/cat')
        .expect(httpStatus.NOT_FOUND);
    });
  });
});
