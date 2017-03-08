'use strict';

process.env.TZ = 'UTC';

require('./config/env')();
let env = process.env.NODE_ENV || 'development',
    application = require('./config/application'),
    express = require('express'),
    bunyan = require('bunyan'),
    config = require('./config/environment/' + env),
    log = bunyan.createLogger({
        name: config.app_name
    }),
    app = express(),
    server = require('http').createServer(app), 
    io = require('socket.io').listen(server, {
        'transports': ['xhr-polling', 'polling', 'websocket', 'flashsocket'],
        'origins': '*:*'
    });
    

process.env.NODE_ENV = env;

require(application.utils + 'helper')(server, log, config);
require(application.config + 'express')(app, config);

/** ROUTES **/

require(application.routes)(app, io, config);

module.exports = app;
