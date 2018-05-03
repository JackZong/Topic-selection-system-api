const Sequelize = require('Sequelize')
const sequelize = require('../../config/mssql')
const { Student } = require('../user/user.model')
function findOne(payload) {
  return Student.findOne({
  	attributes: ['st_id','st_name','st_sex','st_telephone','st_qq','st_email','st_introduce','st_class'],
  	where: {'st_id': payload.username},
  	raw: true
  })
}
function update(payload) {
  return Student.update({
  	'st_introduce': payload.st_introduce
  	},{
  	where: {'st_id': payload.username}
  })
}
module.exports = { findOne, update }