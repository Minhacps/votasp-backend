const compose = require('koa-compose');

const koaRespond = require('./koa-respond');
const jwtDecoder = require('./jwt-decoder');
const loadRouteFiles = require('./load-route-files');

module.exports = async () =>
    compose([
      koaRespond(),
      jwtDecoder(),
      ...await loadRouteFiles(),
    ]);
