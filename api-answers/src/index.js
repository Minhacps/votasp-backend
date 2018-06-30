const api = require('./api');
const { api: apiConfig } = require('./config');

const mongoose = require('./infrastructure/mongoose');
mongoose.connect();

api(apiConfig);
