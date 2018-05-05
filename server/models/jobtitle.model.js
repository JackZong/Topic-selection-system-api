const Sequelize = require('sequelize')
const sequelize = require('../../config/mssql')
const JobTitle = sequelize.define('JobTitle', {
	'jt_id': Sequelize.STRING,
	'jt_name': Sequelize.STRING
}, {
	timestamp: false,
    tableName: 'JobTitle',
	underscored: true,
	freezeTableName: true
})
module.exports = { JobTitle }