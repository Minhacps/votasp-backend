const Koa = require('koa');

const onExecuteGenerator = (port) =>
  () => console.log(`Running on port: ${port}`);

module.exports = ({ port }) => {
  const onExecute = onExecuteGenerator(port);

  const api = new Koa();
  return api.listen( port, onExecute );
}
