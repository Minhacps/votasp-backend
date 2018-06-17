const getTokenInfo = (context) =>
  context.body = context.state.user;

module.exports = {
  getTokenInfo,
};
