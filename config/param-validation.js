import Joi from 'Joi'
export default {
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
}