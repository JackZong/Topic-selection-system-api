const Sequelize = require('sequelize')
const sequelize = require('../../config/mssql')
const Manager = sequelize.define('Manager', {
  mt_id: {
  	type: Sequelize.STRING
  },
  ma_name: {
  	type: Sequelize.STRING
  },
  ma_d_id: {
  	type: Sequelize.STRING
  },
  ma_sex: {
  	type: Sequelize.STRING
  },
  ma_telephone: {
  	type: Sequelize.STRING
  },
  ma_password: {
  	type: Sequelize.STRING
  },
  ma_question: {
  	type: Sequelize.STRING
  },
  ma_answer: {
  	type: Sequelize.STRING
  }
},{
  tableName: 'Manager',
  timestamps: false
})
module.exports = { Manager }