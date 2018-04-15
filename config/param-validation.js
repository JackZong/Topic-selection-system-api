const Joi = require('joi')
module.exports = {
	createUser: {
		body: {
         username: Joi.string().required(),
         password: Joi.string().required()
		}
	},
	login: {
		username: Joi.string().required(),
		password: Joi.string().required()
	}
};