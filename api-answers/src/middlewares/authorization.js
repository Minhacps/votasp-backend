const jwt = require('koa-jwt');
const jwksRsa = require('jwks-rsa');

const { authorization: authorizationConfig } = require('../config');
const {
  host,
  audience,
  issuer,
} = authorizationConfig;

const jwtSecretConfig = {
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 2,
  jwksUri: `${host}/.well-known/jwks.json`
};

module.exports = () => jwt({
  secret: jwksRsa.koaJwtSecret(jwtSecretConfig),
  audience,
  issuer,
  algorithms: [ 'RS256' ]
});
