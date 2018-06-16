const compose = require('koa-compose');
const loadRouteFiles = require('load-route-files');

const authorization = require('./authorization');

module.exports = () =>
  loadRouteFiles({ directory: 'src/domains' })
    .then( (routes) =>
      compose([
        authorization(),
        ...routes,
      ])
    );
