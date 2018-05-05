const Sequelize = require('sequelize')
const sequelize = require('../../config/mssql')
const { Student } = require('../user/user.model')
const { Thesis } = require('../thesis/thesis.model')
const { Mentor } = require('../mentor/mentor.model')
const PreSel = sequelize.define('Pre_SelTh_Rec', {
	'st_id': { type: Sequelize.STRING },
	'th_id': { type: Sequelize.INTEGER },
	'psr_state': { type: Sequelize.STRING },
	'mt_id': { type: Sequelize.STRING }
},{
	tableName: 'Pre_SelTh_Rec',
	underscored: true
})
Student.hasOne(PreSel,{ foreignKey: 'st_id', targetKey: 'st_id'})
PreSel.belongsTo(Student, { targetKey: 'st_id', foreignKey: 'st_id' })
Thesis.hasOne(PreSel,{ foreignKey: 'th_id', targetKey: 'th_id'})
PreSel.belongsTo(Thesis, { targetKey: 'th_id', foreignKey: 'th_id' })
function createSel(payload) {
	return PreSel.create({
	  'st_id': payload.st_id,
	  'th_id': payload.th_id,
	  'mt_id': payload.mt_id
    })
}
function list(payload) {
	return PreSel.findAll({
      attributes: ['st_id','th_id','psr_state','mt_id'],
      where: { 'mt_id': payload.username },
      raw: true,
      include: [{
      	model: Student,
      	attributes: ['st_name','st_qq','st_telephone','st_sex']
      },{
      	model: Thesis,
      	attributes: ['th_name']
      }]
	})
}
Mentor.hasOne(PreSel,{ foreignKey: 'mt_id', targetKey: 'mt_id'})
PreSel.belongsTo(Mentor, { targetKey: 'mt_id', foreignKey: 'mt_id' })
function listStudent(payload) {
  return PreSel.findAll({
      attributes: ['st_id','th_id','psr_state','mt_id'],
      where: { 'st_id': payload.username },
      raw: true,
      include: [{
        model: Mentor,
        attributes: ['mt_name','mt_telephone','mt_sex']
      },{
        model: Thesis,
        attributes: ['th_name']
      }]
  })
}
function update(payload){
  return PreSel.update({
          'psr_state': payload.psr_state
        },{
          where: { 'st_id': payload.st_id,'th_id': payload.th_id }
        })
}
function shouldUpdate(payload) {
  return sequelize.query(`SELECT psr_state FROM Pre_SelTh_Rec WHERE st_id = ${payload.st_id}`)
}
module.exports = { PreSel, createSel, list, update, listStudent,shouldUpdate }