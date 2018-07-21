const compose = require('koa-compose');
const bodyparser = require('koa-bodyparser');

const koaRespond = require('./koa-respond');
const jwtDecoder = require('./jwt-decoder');
const loadRouteFiles = require('./load-route-files');

module.exports = async () =>
    compose([
      bodyparser(),
      koaRespond(),
      jwtDecoder(),
      ...await loadRouteFiles(),
    ]);
