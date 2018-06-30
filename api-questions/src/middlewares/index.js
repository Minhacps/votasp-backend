const compose = require('koa-compose');

const koaRespond = require('./koa-respond');
const loadRouteFiles = require('./load-route-files');

module.exports = async () =>
    compose([
      koaRespond(),
      ...await loadRouteFiles(),
    ]);
