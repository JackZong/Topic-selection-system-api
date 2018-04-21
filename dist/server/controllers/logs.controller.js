'use strict';

var LoginLog = require('../models/logs.model');
function list(req, res, next) {
  LoginLog.list(req.body).then(function (success) {
    res.json({ code: 1, msg: 'success', data: success });
  }).catch(function (err) {
    res.json({ code: 0, msg: 'query failed' });
  });
}
module.exports = { list: list };