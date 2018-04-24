'use strict';

var Dashboard = require('../models/dashboard.model');
function list(req, res, next) {
  Dashboard.list().then(function (success) {
    success = success[0].slice(0, 10);
    res.json({ code: 1, msg: 'success', data: success });
  }).catch(function (err) {
    console.log(err);
    res.json({ code: 0, msg: 'query failed' });
  });
}
module.exports = { list: list };