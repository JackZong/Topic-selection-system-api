'use strict';

var ThesisApply = require('../models/thesisapply.model');
function list(req, res, next) {
  ThesisApply.list(req.body).then(function (response) {
    res.json({ code: 1, msg: 'success', data: response });
  }).catch(function (err) {
    res.json({ code: 0, msg: 'query thesisapply failed' });
  });
}
function updateThesis(req, res, next) {
  //ThesisApply.update()
}
module.exports = { list: list };