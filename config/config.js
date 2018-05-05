const Joi = require('joi') 
//Loads environment variables from .env for nodejs projects.https://github.com/motdotla/dotenv
require('dotenv').config()
const envVarsSchema = Joi.object({
	NODE_ENV: Joi.string()
	  .allow(['development','production','test','provision'])
	  .default('development'),
	PORT: Joi.number()
	.default(4040),
	JWT_SECRET: Joi.string()
	  .required()
	  .description('JWT Secret required to sign')
}).unknown().required();
const { error, value: envVars } = Joi.validate(process.env, envVarsSchema)
const db = {
	user: 'root',
	password: 'root',
	server: 'localhost',
	database: 'gtas',
	port: 1433
}
const config = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	jwtSecret: envVars.JWT_SECRET,
	db: db
}
module.exports = config 