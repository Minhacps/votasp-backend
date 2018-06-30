const koaRespond = require('koa-respond');

module.exports = () =>
  koaRespond({
    statusMethods: {
      ok: 200,
    },
  });
