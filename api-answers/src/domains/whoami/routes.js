const Router = require('koa-joi-router');

const handlers = require('./handlers');

const router = Router();
router.name = 'Who am I?';
router.prefix('/whoami');

router.get('/', {
  handler: handlers.getTokenInfo,
});

module.exports = router.middleware();
