const Sequelize = require('sequelize')
const sequelize = require('../../config/mssql')
const ResearchLaboratory = sequelize.define('ResearchLaboratory', {
	'res_id': Sequelize.STRING,
	'res_name': Sequelize.STRING,
	'res_d_id': Sequelize.STRING
}, {
	timestamp: false,
    tableName: 'ResearchLaboratory',
	underscored: true,
	freezeTableName: true
})
module.exports = { ResearchLaboratory }