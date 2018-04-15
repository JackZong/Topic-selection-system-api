const express = require('express')
const config = require('./config')
const routes = require('../index.route')
const bodyParser = require('body-parser')
const app = express()
if(config.env === 'dev') {
	console.log('this is a dev')
}
// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',routes)
module.exports = app