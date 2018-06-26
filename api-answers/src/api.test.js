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

  it('should return 401 without token', async () => {
    const server = await api({ port: null });

    const { body, status } = await request(server)
      .get('/whoami');

    expect(status).toBe(401);
  });

  it('should return 200 with a token', async () => {
    const server = await api({ port: null });

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiaXJ1IjoibGFpYmUiLCJqdGkiOiIzZjVmY2MzOS1lMmMwLTRhMDEtYWUwOS00ZWE5ODgzYTlkMzUiLCJpYXQiOjE1MjkxODI2NDAsImV4cCI6MTUyOTE4NjI0MH0.ElwbN51XwlTNeXXdE7-VLlk30HihEz913fuxd7_HmA8';

    const { body, status } = await request(server)
      .get('/whoami')
      .set('Authorization', `Bearer ${token}`);

    expect(status).toBe(200);
    expect(body.biru).toBe('laibe');
  });
})
