'use strict';

const Joi = require('joi');

module.exports = {
    "question": Joi.object({
        id: Joi.number()
            .required()
            .min(1)
            .description('O identificador da questão')
            .example(1),
        question: Joi.string()
            .required()
            .description('a questão a ser respondida pelo usuário')
            .example('O ovo veio antes da galinha.')
    }).label('Question').description('Question')
};