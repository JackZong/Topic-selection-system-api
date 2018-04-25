'use strict';

var ThesisCheck = require('../models/thesischeck.model');
function list(req, res, next) {
  ThesisCheck.list(req.query).then(function (response) {
    ThesisCheck.count().then(function (count) {
      res.json({ code: 1, msg: 'success', data: response, page: {
          count: count.length,
          page: parseInt(req.query.page) || 0,
          page_limit: parseInt(req.query.page_limit) || 20
        } });
    }).catch();
  }).catch(function (err) {
    console.log(err);
    res.json({ code: 0, msg: 'query thesischeck failed' });
  });
}
function update(req, res, next) {
  ThesisCheck.update(req.body).then(function (success) {
    res.json({ code: 1 });
  }).catch(function (err) {
    console.log(err);
  });
}
module.exports = { list: list, update: update };