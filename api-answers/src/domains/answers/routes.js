const Router = require('koa-joi-router');

const handlers = require('./handlers');

const router = Router();
router.name = 'Answers';
router.prefix('/');

router.get('/', {
  handler: handlers.listUserAnswers,
});

router.put('/', {
  handler: handlers.saveUserAnswers,
});

module.exports = router.middleware();
