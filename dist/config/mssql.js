'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('gtas', 'root', 'root', {
	host: 'localhost',
	dialect: 'mssql',
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
sequelize.authenticate().then(function () {
	console.log('connection ok');
}).catch(function (err) {
	console.log('connection fail', err);
});
module.exports = sequelize;