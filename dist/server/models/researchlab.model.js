'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../../config/mssql');
var ResearchLaboratory = sequelize.define('ResearchLaboratory', {
	'res_id': Sequelize.STRING,
	'res_name': Sequelize.STRING,
	'res_d_id': Sequelize.STRING
}, {
	timestamp: false,
	tableName: 'ResearchLaboratory',
	underscored: true,
	freezeTableName: true
});
module.exports = { ResearchLaboratory: ResearchLaboratory };