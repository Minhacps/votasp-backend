const compose = require('koa-compose');
const cors = require('@koa/cors');

const koaRespond = require('./koa-respond');
const loadRouteFiles = require('./load-route-files');

module.exports = async () =>
    compose([
      cors(),
      koaRespond(),
      ...await loadRouteFiles(),
    ]);
