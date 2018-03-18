'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Loads environment variables from .env for nodejs projects.https://github.com/motdotla/dotenv
require('dotenv').config();
var envVarsSchema = _joi2.default.object({
	NODE_ENV: _joi2.default.string().allow(['development', 'production', 'test', 'provision']).default('development'),
	PORT: _joi2.default.number().default(4040),
	JWT_SECRET: _joi2.default.string().required().description('JWT Secret required to sign')
}).unknown().required();

var _Joi$validate = _joi2.default.validate(process.env, envVarsSchema),
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
exports.default = config;