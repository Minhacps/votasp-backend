const jwtDecode = require('jwt-decode');

module.exports = () =>
  (context, next) => {
    const { authorization } = context.request.header;

    try {
      const decodedJwt = jwtDecode(authorization)
      context.state.user = decodedJwt;

      return next();
    }
    catch(error) {
      context.status = 401;
      context.body = 'unauthorized';
    }
  };
