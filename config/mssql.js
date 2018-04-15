const Sequelize = require('sequelize')
const sequelize = new Sequelize('gtas','root','root',{
	host: 'localhost',
	dialect: 'mssql',
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})
sequelize.authenticate().then(()=>{
	console.log('connection ok')
}).catch(err => {
	console.log('connection fail',err)
})
module.exports = sequelize