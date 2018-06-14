const Koa = require('koa');
const koaHealthcheck = require('koa-simple-healthcheck');
const middlewares = require('./middlewares');

const onExecuteGenerator = (port) =>
  () => console.log(`Running on port: ${port}`);

module.exports = ({ port }) => {
  const onExecute = onExecuteGenerator(port);

  const api = new Koa();
  api.use( koaHealthcheck() );

  api.use( middlewares() );

  return api.listen( port, onExecute );
}
