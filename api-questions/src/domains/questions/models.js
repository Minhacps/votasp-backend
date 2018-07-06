'use strict';

const Joi = require('joi');

const question = Joi.object()
  .label('Question')
  .description('Question')
  .keys({
      id: Joi.number().required().min(1).description('O identificador da questão').example(1),
      question: Joi.string().required().description('a questão a ser respondida pelo usuário').example('O ovo veio antes da galinha.')
  })

module.exports = {
    question,
};
