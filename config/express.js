'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let methodOverride = require('method-override');
let session = require('express-session');
let expressValidator = require('express-validator');

let middleware = require('../app/utils/middleware');

module.exports = function(app, config) {

    app.set('port', process.env.APP_PORT || 3000);
    app.set('port', config.port || process.env.APP_PORT);
    app.set('ip', config.ip);
    app.set('env', config.env);
    app.set('config', config);
    app.set('api_version', process.env.APP_VER || '/api/1.0');
    app.set('view engine', 'ejs');
    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(expressValidator({
        customValidators: {
            isArray: function(value) {
                return Array.isArray(value);
            },
            isInRatingRange: function(value) {
                if (value >= 1 && value <= 5) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }));
    app.use(cookieParser());
    app.use(bodyParser.json({
        type: 'application/json',
        limit: '50mb'
    }));
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    }));

    app.use(middleware.allowCrossDomain);
    app.use(session({
        secret: config.token_secret,
        cookie: {
            secure: true,
            maxAge: 60000
        },
        resave: true,
        saveUninitialized: true
    }));
  
}