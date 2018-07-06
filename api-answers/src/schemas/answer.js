const Joi = require('joi');

const POSSIBLE_ANSWERS = [
  'discordo_plenamente',
  'discordo',
  'indiferente',
  'concordo',
  'concordo_plenamente',
];

module.exports = Joi.object().keys({
  questionId: Joi.number().integer(),
  answer: Joi.string().valid(POSSIBLE_ANSWERS).required(),
});
