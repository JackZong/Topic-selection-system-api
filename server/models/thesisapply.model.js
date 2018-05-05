const Sequelize = require('sequelize')
const sequelize = require('../../config/mssql')
const { Thesis, ThesisLevel, ThesisField } = require('../thesis/thesis.model')
const { Mentor } = require('../models/mentor.model')
ThesisField.hasOne(Thesis,{ foreignKey: 'th_thf_id', targetKey: 'thf_id'})
Thesis.belongsTo(ThesisField, { targetKey: 'thf_id', foreignKey: 'th_thf_id' })
ThesisLevel.hasOne(Thesis,{ foreignKey: 'th_thl_id', targetKey: 'thl_id'})
Thesis.belongsTo(ThesisLevel, { targetKey: 'thl_id', foreignKey: 'th_thl_id' })
function list(payload) {
  return Thesis.findAll({
  	attributes: ['th_id','th_name','th_maxnum','th_requirement','th_ispass'],
  	where: {'th_mt_id': payload.username},
  	raw: true,
    order: [['th_id','DESC']],
    include: [{
      model: ThesisField,
      attributes: [['thf_field','thf_field']]
    },{
      model: ThesisLevel,
      attributes: ['thl_level']
    }]
  })
}
function update(payload) {
  return Thesis.update(payload)
}
module.exports = { list, update }