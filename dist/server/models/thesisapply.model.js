'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../../config/mssql');

var _require = require('../thesis/thesis.model'),
    Thesis = _require.Thesis,
    ThesisLevel = _require.ThesisLevel,
    ThesisField = _require.ThesisField;

var _require2 = require('../models/mentor.model'),
    Mentor = _require2.Mentor;

ThesisField.hasOne(Thesis, { foreignKey: 'th_thf_id', targetKey: 'thf_id' });
Thesis.belongsTo(ThesisField, { targetKey: 'thf_id', foreignKey: 'th_thf_id' });
ThesisLevel.hasOne(Thesis, { foreignKey: 'th_thl_id', targetKey: 'thl_id' });
Thesis.belongsTo(ThesisLevel, { targetKey: 'thl_id', foreignKey: 'th_thl_id' });
function list(payload) {
  return Thesis.findAll({
    attributes: ['th_id', 'th_name', 'th_maxnum', 'th_requirement', 'th_ispass'],
    where: { 'th_mt_id': payload.username },
    raw: true,
    order: [['th_id', 'DESC']],
    include: [{
      model: ThesisField,
      attributes: [['thf_field', 'thf_field']]
    }, {
      model: ThesisLevel,
      attributes: ['thl_level']
    }]
  });
}
function update(payload) {
  return Thesis.update(payload);
}
module.exports = { list: list, update: update };