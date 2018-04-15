'use strict';

var Sequelize = require('Sequelize');
var sequelize = require('../../config/mssql');
var Thesis = sequelize.define('Thesis', {
  th_id: Sequelize.INTEGER,
  th_name: Sequelize.STRING,
  th_mt_id: Sequelize.STRING,
  th_thl_id: Sequelize.INTEGER,
  th_thf_id: Sequelize.INTEGER,
  th_requirement: Sequelize.STRING,
  th_maxnum: Sequelize.INTEGER,
  th_state: Sequelize.INTEGER,
  th_ispass: Sequelize.STRING,
  th_year: Sequelize.STRING
}, {
  timestamp: false,
  tableName: 'Thesis'
});
var ThesisField = sequelize.define('ThesisField', {
  thf_id: Sequelize.INTEGER,
  thf_field: Sequelize.STRING
}, {
  timestamp: false,
  tableName: 'ThesisField'
});
Thesis.belongsTo(ThesisField, { foreignKey: 'thf_id', targetKey: 'th_thf_id' });
function list() {
  Thesis.findAll({
    attributes: ['th_id', 'th_name', 'th_mt_id', 'th_thl_id', 'th_thf_id', 'th_requirement', 'th_maxnum', 'thf_field'],
    where: { 'th_ispass': 'Y' },
    raw: true
  }).then(function (res) {
    console.log(res);
    return res;
  }).catch(function (err) {
    console.log('Thesis query error ' + err);
  });
}
module.exports = { list: list };