const mongoose = require('mongoose');
const { mongodb: mongodbConfig } = require('../config');

const connect = () =>
  mongoose.connect(
    mongodbConfig.connection,
    mongodbConfig.options,
  )
  .catch( () => {
    console.error('Failed to connect to mongodb, retrying...');

    return connect();
  });

module.exports = {
  connect,
};
