const Sequelize = require('Sequelize')
const sequelize = require('../../config/mssql')
const { JobTitle } = require('./jobtitle.model')
const {ResearchLaboratory} = require('./researchlab.model')
const Mentor = sequelize.define('mentor', {
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
})
function list() {
	return sequelize.query('SELECT a.mt_id,a.mt_name,a.mt_sex,a.mt_telephone,a.mt_email,b.jt_name,c.res_name from Mentor as a,JobTitle as b,ResearchLaboratory as c WHERE a.mt_jt_id = b.jt_id AND a.mt_res_id = c.res_id')
}
module.exports = { Mentor, list }