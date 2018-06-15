const compose = require('koa-compose');

const authorization = require('./authorization');

module.exports = () => compose([
  authorization(),
]);
