'use strict';

var PreSel = require('../models/presel.model');
function selection(req, res, next) {
  PreSel.createSel(req.body).then(function (success) {
    console.log(success);
  }).catch(function (err) {
    console.log(err);
  });
}
function list(req, res, next) {
  PreSel.list(req.body).then(function (response) {
    res.json({ code: 1, msg: 'success', data: response });
  }).catch(function (err) {
    res.json({ code: 0, msg: 'query pre sel error' });
  });
}
module.exports = { selection: selection, list: list };