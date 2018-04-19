const Sequelize = require('Sequelize')
const sequelize = require('../../config/mssql')
const { Mentor } = require('../mentor/mentor.model')
const Thesis = sequelize.define('Thesis', {
  'th_id': { type: Sequelize.INTEGER },
  'th_name': { type: Sequelize.STRING },
  'th_mt_id': { type: Sequelize.STRING },
  'th_thl_id': { type: Sequelize.INTEGER },
  'th_thf_id': { type: Sequelize.INTEGER, field: 'th_thf_id' },
  'th_requirement': { type: Sequelize.STRING },
  'th_maxnum': { type: Sequelize.INTEGER },
  'th_state': { type: Sequelize.INTEGER },
  'th_ispass': { type: Sequelize.STRING },
  'th_year': { type: Sequelize.STRING }
}, {
  timestamp: false,
  tableName: 'Thesis',
  underscored: true,
  freezeTableName: true
})
const ThesisField = sequelize.define('ThesisField', {
  'thf_id': { type: Sequelize.INTEGER, primaryKey: true },
  'thf_field': { type: Sequelize.STRING } 
}, {
	timestamp: false,
	tableName: 'ThesisField',
  underscored: true,
  freezeTableName: true
})
const ThesisLevel = sequelize.define('ThesisLevel', {
  'thl_id': { type: Sequelize.INTEGER },
  'thl_level': { type: Sequelize.STRING }
}, {
  timestamp: false,
  tableName: 'ThesisLevel',
  underscored: true,
  freezeTableName: true
})
ThesisField.hasOne(Thesis,{ foreignKey: 'th_thf_id', targetKey: 'thf_id'})
Thesis.belongsTo(ThesisField, { targetKey: 'thf_id', foreignKey: 'th_thf_id' })
ThesisLevel.hasOne(Thesis,{ foreignKey: 'th_thl_id', targetKey: 'thl_id'})
Thesis.belongsTo(ThesisLevel, { targetKey: 'thl_id', foreignKey: 'th_thl_id' })
Mentor.hasOne(Thesis,{ foreignKey: 'th_mt_id', targetKey: 'mt_id'})
Thesis.belongsTo(Mentor, { targetKey: 'mt_id', foreignKey: 'th_mt_id' })
function count() {
  return Thesis.findAll({
    where: {'th_ispass': 'Y'},
    attributes: ['th_id'],
    raw: true
  })
}
function list(payload) {
  return Thesis.findAll({
  	attributes: ['th_id','th_name','th_maxnum','th_state','th_mt_id'],
  	where: {'th_ispass': 'Y'},
  	raw: true,
    offset: parseInt(payload.page_limit) * parseInt(payload.page) || 0,
    limit: parseInt(payload.pege_limit) || 20,
    order: [['th_id','ASC']],
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
module.exports = { list,count }