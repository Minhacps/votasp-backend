const loadRouteFiles = require('load-route-files');

module.exports = () =>
  loadRouteFiles({
    directory: 'src/domains'
  });
