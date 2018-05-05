'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../../config/mssql');
var JobTitle = sequelize.define('JobTitle', {
	'jt_id': Sequelize.STRING,
	'jt_name': Sequelize.STRING
}, {
	timestamp: false,
	tableName: 'JobTitle',
	underscored: true,
	freezeTableName: true
});
module.exports = { JobTitle: JobTitle };