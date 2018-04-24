'use strict';

var _require = require('./presel.model.js'),
    PreSel = _require.PreSel;

var sequelize = require('../../config/mssql.js');
function list(payload) {
  return sequelize.query("SELECT a.th_name,a.th_id,a.th_state,b.mt_name FROM Thesis a,Mentor b WHERE a.th_mt_id = b.mt_id AND a.th_year='2018' ORDER BY a.th_state DESC");
}
module.exports = { list: list };