module.exports = {
  api: {
    port: 3000,
  },

  authorization: {
    host: 'https://login.votasp.org.br/',
    audience: 'https://app.votasp.org.br/',
    issuer: 'https://login.votasp.org.br/',
  },

  mongodb: {
    connection: `mongodb://localhost:27017/votasp`,
    options: {},
  },
}
