const Promise = require('bluebird')
const Sequelize = require('sequelize')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')
const sequelize = require('../../config/mssql')

const Student = sequelize.define('student', {
  st_name: {
  	type: Sequelize.STRING
  },
  st_id: {
  	type: Sequelize.STRING
  },
  st_d_id: {
  	type: Sequelize.STRING
  },
  st_mj_id: {
  	type: Sequelize.STRING
  },
  st_sex: {
  	type: Sequelize.STRING
  },
  st_grade: {
  	type: Sequelize.STRING
  },
  st_class: {
  	type: Sequelize.STRING
  },
  st_telephone: {
  	type: Sequelize.STRING
  },
  st_qq: {
  	type: Sequelize.STRING
  },
  st_email: {
  	type: Sequelize.STRING
  },
  st_password: {
  	type: Sequelize.STRING
  },
  st_question: {
  	type: Sequelize.STRING
  },
  st_answer: {
  	type: Sequelize.STRING
  },
  st_introduce: {
  	type: Sequelize.STRING
  },
  st_graduation_year: {
  	type: Sequelize.STRING
  }
},{
  tableName: 'Student',
  timestamps: false
})

function list () {
	// sequelize.query('SELECT * FROM Student').spread((res,meta) => {
 //    return res
 //  })
  Student.findAll({
    attributes: ['st_name','st_id'],
    raw: true
  }).then(student => {
    console.log(student)
    return student
  }).catch(err => {
    console.log(err)
  })
}
function get(){

}
function login(payload){
  return Student.findOne({
    attributes:['st_password'],
    raw: true,
    where: {'st_id':payload.username}
  })
}
module.exports = { list,get,login }