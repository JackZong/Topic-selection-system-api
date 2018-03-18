'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Joi = require('Joi');

var _Joi2 = _interopRequireDefault(_Joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	createUser: {
		body: {
			username: _Joi2.default.string().required(),
			password: _Joi2.default.string().required()
		}
	},
	login: {
		username: _Joi2.default.string().required(),
		password: _Joi2.default.string().required()
	}
};