const api = require('./api');

const port = process.env.API_PORT || 3000;

api({ port });
