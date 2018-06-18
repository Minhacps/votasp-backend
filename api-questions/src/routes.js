'use strict';

const Handlers = require('./handlers.js');
const Models = require('./models.js');
const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/questions',
        config: {
            description: 'Obtém todas as questões',
            tags: ['api'],
            response: {schema: Joi.array().items(Models.question)},
            handler: Handlers.questionList
        }
    },
    {
        method: 'GET',
        path: '/questions/{id}',
        config: {
            description: 'Obtém uma questão',
            tags: ['api'],
            validate: {
                params: {
                    id: Joi.number().min(1)
                }
            },
            response: {schema: Models.question},
            handler: Handlers.questionGet
        }
    }
];