'use strict';

const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const Routes = require('./routes.js');

(async () => {
    const server = await new Hapi.Server({
        host: process.env.QUESTIONS_HOST,
        port: 80,
    });

    const swaggerOptions = {
        info: {
            title: 'VotaSP Questions API'
        },
        'schemes': ['http'],
        'host': server.info.uri.replace('http://','')
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.route(Routes);

    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }

})();
