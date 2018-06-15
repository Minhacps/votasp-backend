const request = require('supertest');

describe('API', () => {
  const api = require('./api');
  it('should return 200 on /healthcheck', async () => {
    const server = await api({ port: null });

    const { body, status } = await request(server)
      .get('/healthcheck');

    expect(status).toBe(200);
    expect(body).toHaveProperty('uptime');
  });
})
