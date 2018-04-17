'use strict';

var Sequelize = require('Sequelize');
var sequelize = require('../../config/mssql');
var Thesis = sequelize.define('Thesis', {
  th_id: { type: Sequelize.INTEGER },
  th_name: { type: Sequelize.STRING },
  th_mt_id: { type: Sequelize.STRING },
  th_thl_id: { type: Sequelize.INTEGER },
  th_thf_id: { type: Sequelize.INTEGER, field: 'th_thf_id' },
  th_requirement: { type: Sequelize.STRING },
  th_maxnum: { type: Sequelize.INTEGER },
  th_state: { type: Sequelize.INTEGER },
  th_ispass: { type: Sequelize.STRING },
  th_year: { type: Sequelize.STRING }
}, {
  timestamp: false,
  tableName: 'Thesis'
});
var ThesisField = sequelize.define('ThesisField', {
  thf_id: { type: Sequelize.INTEGER, primaryKey: true },
  thf_field: { type: Sequelize.STRING }
}, {
  timestamp: false,
  tableName: 'ThesisField'
});
Thesis.belongsTo(ThesisField, { foreignKey: 'th_thf_id' });
function list(payload) {
  return Thesis.findAll({
    attributes: ['th_id', 'th_name', 'th_mt_id', 'th_thl_id', 'th_thf_id', 'th_requirement', 'th_maxnum'],
    where: { 'th_ispass': 'Y' },
    raw: true,
    limit: 20,
    offset: payload.offset || 0
  });
}
module.exports = { list: list };