const Sequelize = require('sequelize')
const sequelize = require('../../config/mssql')
const { Mentor } = require('../mentor/mentor.model')
const { Thesis, ThesisField, ThesisLevel } = require('../thesis/thesis.model')
ThesisField.hasOne(Thesis,{ foreignKey: 'th_thf_id', targetKey: 'thf_id'})
Thesis.belongsTo(ThesisField, { targetKey: 'thf_id', foreignKey: 'th_thf_id' })
ThesisLevel.hasOne(Thesis,{ foreignKey: 'th_thl_id', targetKey: 'thl_id'})
Thesis.belongsTo(ThesisLevel, { targetKey: 'thl_id', foreignKey: 'th_thl_id' })
Mentor.hasOne(Thesis,{ foreignKey: 'th_mt_id', targetKey: 'mt_id'})
Thesis.belongsTo(Mentor, { targetKey: 'mt_id', foreignKey: 'th_mt_id' })

function count() {
  return Thesis.findAll({
    where: {'th_year': '2018'},
    attributes: ['th_id'],
    raw: true
  })
}
function list(payload) {
  return Thesis.findAll({
  	attributes: ['th_id','th_name','th_maxnum','th_state','th_mt_id','th_ispass','th_avail','th_requirement'],
  	raw: true,
    offset: parseInt(payload.page_limit) * parseInt(payload.page) || 0,
    limit: parseInt(payload.page_limit) || 20,
    order: [['th_id','DESC']],
    where: {'th_year': '2018'},
    include: [{
      model: ThesisField,
      attributes: [['thf_field','thf_field']]
    },{
      model: ThesisLevel,
      attributes: ['thl_level']
    },{
      model: Mentor,
      attributes: ['mt_name']
    }]
  })
}
function add(payload) {
  return Thesis.create(payload)
}
function update(payload) {
  return Thesis.update({
    'th_ispass': payload.th_ispass
  },{
    where: {'th_id': payload.th_id}
  })
}
module.exports = { list, count, add, Thesis, ThesisField, ThesisLevel,update }