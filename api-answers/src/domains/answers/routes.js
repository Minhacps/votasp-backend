const Router = require('koa-joi-router');

const handlers = require('./handlers');

const router = Router();
router.name = 'Answers';
router.prefix('/');

module.exports = router.middleware();
