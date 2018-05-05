'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../../config/mssql');
var LoginLog = sequelize.define('LoginLog', {
  'log_id': { type: Sequelize.INTEGER },
  'log_userid': { type: Sequelize.STRING },
  'log_username': { type: Sequelize.STRING },
  'log_optype': { type: Sequelize.STRING },
  'log_logintime': { type: Sequelize.DATE },
  'log_loginip': { type: Sequelize.STRING },
  'log_outtime': { type: Sequelize.DATE }
}, {
  tableName: 'LoginLog',
  underscored: true
});
function list(payload) {
  return LoginLog.findAll({
    attributes: ['log_id', 'log_userid', 'log_username', 'log_optype', 'log_logintime', 'log_outtime', 'log_loginip'],
    where: { 'log_userid': payload.username },
    raw: true,
    order: [['log_id', 'DESC']]
  });
}
module.exports = { list: list };