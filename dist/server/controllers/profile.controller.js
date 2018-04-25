'use strict';

var Profile = require('../models/profile.model');
function findOne(req, res, next) {
  Profile.findOne(req.body).then(function (success) {
    res.json({ code: 1, msg: 'success', data: success });
  }).catch(function (err) {
    res.json({ code: 0, msg: 'query failed' });
  });
}
module.exports = { findOne: findOne };