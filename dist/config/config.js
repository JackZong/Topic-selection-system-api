'use strict';

var Joi = require('joi');
//Loads environment variables from .env for nodejs projects.https://github.com/motdotla/dotenv
require('dotenv').config();
var envVarsSchema = Joi.object({
	NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'provision']).default('development'),
	PORT: Joi.number().default(4040),
	JWT_SECRET: Joi.string().required().description('JWT Secret required to sign')
}).unknown().required();

var _Joi$validate = Joi.validate(process.env, envVarsSchema),
    error = _Joi$validate.error,
    envVars = _Joi$validate.value;

var db = {
	user: 'root',
	password: 'root',
	server: 'localhost',
	database: 'gtas',
	port: 1433
};
var config = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	jwtSecret: envVars.JWT_SECRET,
	db: db
};
module.exports = config;