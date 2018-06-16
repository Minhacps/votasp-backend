const Koa = require('koa');
const koaHealthcheck = require('koa-simple-healthcheck');
const middlewares = require('./middlewares');

const onExecuteGenerator = (port) =>
  () => console.log(`Running on port: ${port}`);

module.exports = async ({ port }) => {
  const onExecute = onExecuteGenerator(port);

  const api = new Koa();
  api.use( koaHealthcheck() );

  const composedMiddleware = await middlewares();
  api.use(composedMiddleware);


  return api.listen( port, onExecute );
}
