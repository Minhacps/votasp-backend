const Joi = require('joi');
const Answer = require('./answer');

const checkUniqueAnswers = (a, b) => a.questionId === b.questionId;

module.exports = Joi.object().keys({
  userId: Joi.string().required(),
  answers: Joi.array().items(Answer).unique(checkUniqueAnswers).required(),
});
