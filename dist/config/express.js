'use strict';

var express = require('express');
var config = require('./config');
var routes = require('../index.route');
var bodyParser = require('body-parser');
var app = express();
if (config.env === 'dev') {
	console.log('this is a dev');
}
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
module.exports = app;