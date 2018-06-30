const Joi = require('joi');

const POSSIBLE_ANSWERS = [
  'concordo_plenamente',
  'discordo',
  'concordo',
  'discordo_plenamente',
];

module.exports = Joi.object().keys({
  questionId: Joi.number().integer(),
  answer: Joi.string().valid(POSSIBLE_ANSWERS).required(),
});
