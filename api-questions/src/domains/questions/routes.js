const Handlers = require('./handlers.js');
const Models = require('./models.js');
const Joi = require('joi');

const Router = require('koa-joi-router');

const router = Router();
router.name = 'Questions';
router.prefix('/');

router.get('/', {
  description: 'Obtém todas as questões',
  tags: ['api'],
  response: {schema: Joi.array().items(Models.question)},
  handler: Handlers.questionList
});

router.get('/:id', {
  description: 'Obtém uma questão',
  tags: ['api'],
  validate: {
      params: {
          id: Joi.number().min(1)
      }
  },
  response: {schema: Models.question},
  handler: Handlers.questionGet
});

module.exports = router.middleware();
