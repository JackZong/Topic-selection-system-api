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
app.all('*', function(req, res, next) {
	console.log("123")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method === 'OPTIONS') {
    	res.send(200)
    } else {
    	next();
    }
});
app.use('/api',routes)
module.exports = app