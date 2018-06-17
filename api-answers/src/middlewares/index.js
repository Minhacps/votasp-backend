const compose = require('koa-compose');
const loadRouteFiles = require('load-route-files');

const jwtDecoder = require('./jwt-decoder');

module.exports = () =>
  loadRouteFiles({ directory: 'src/domains' })
    .then( (routes) =>
      compose([
        jwtDecoder(),
        ...routes,
      ])
    );
