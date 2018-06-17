const invalidJwt = 'biru laibe';
const validJwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiaXJ1IjoibGFpYmUiLCJqdGkiOiIzZjVmY2MzOS1lMmMwLTRhMDEtYWUwOS00ZWE5ODgzYTlkMzUiLCJpYXQiOjE1MjkxODI2NDAsImV4cCI6MTUyOTE4NjI0MH0.ElwbN51XwlTNeXXdE7-VLlk30HihEz913fuxd7_HmA8';

describe('middlewares/authorization', () => {
  const jwtDecoder = require('./jwt-decoder');

  it('should execute next if authorization is a jwt token', () => {
    const middleware = jwtDecoder();

    const context = {
      request: { header: { authorization: `Bearer ${validJwt}` } },
      state: {},
    };
    const next = jest.fn();

    const result = middleware(context, next);

    expect(next).toBeCalledTimes(1);
    expect(context.state.user.biru).toBe('laibe');
    expect(context).not.toHaveProperty('body');
    expect(context).not.toHaveProperty('status');
  });

  it('should not execute next if authorization is empty', () => {
    const middleware = jwtDecoder();

    const context = {
      request: { header: { } },
      state: {},
    };
    const next = jest.fn();

    const result = middleware(context, next);

    expect(next).toBeCalledTimes(0);
    expect(context.state).not.toHaveProperty('user');
    expect(context.body).toEqual('unauthorized');
    expect(context.status).toEqual(401);
  });

  it('should not execute next if authorization is not a jwt token', () => {
    const middleware = jwtDecoder();

    const context = {
      request: { header: { authorization: `Bearer ${invalidJwt}` } },
      state: {},
    };
    const next = jest.fn();

    const result = middleware(context, next);

    expect(next).toBeCalledTimes(0);
    expect(context.state).not.toHaveProperty('user');
    expect(context.body).toEqual('unauthorized');
    expect(context.status).toEqual(401);
  });
});
