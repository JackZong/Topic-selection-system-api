'use strict';

var PreSel = require('../models/presel.model');
function selection(req, res, next) {
  PreSel.createSel(req.body).then(function (success) {
    console.log(success);
  }).catch(function (err) {
    console.log(err);
  });
}
module.exports = { selection: selection };