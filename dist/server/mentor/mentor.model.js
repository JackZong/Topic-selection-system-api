'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../../config/mssql');
var Mentor = sequelize.define('mentor', {
	'mt_id': Sequelize.STRING,
	'mt_name': Sequelize.STRING,
	'mt_d_id': Sequelize.STRING,
	'mt_res_id': Sequelize.STRING,
	'mt_jt_id': Sequelize.STRING,
	'mt_sex': Sequelize.STRING,
	'mt_telephone': Sequelize.STRING,
	'mt_qq': Sequelize.STRING,
	'mt_email': Sequelize.STRING,
	'mt_password': Sequelize.STRING,
	'mt_question': Sequelize.STRING,
	'mt_answer': Sequelize.STRING,
	'mt_intorduce': Sequelize.STRING,
	'mt_thesis_num': Sequelize.INTEGER,
	'mt_student_num': Sequelize.INTEGER
}, {
	timestamp: false,
	tableName: 'Mentor',
	underscored: true,
	freezeTableName: true
});
module.exports = { Mentor: Mentor };