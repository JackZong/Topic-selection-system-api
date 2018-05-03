'use strict';

var PreSel = require('../models/presel.model');
function selection(req, res, next) {
  PreSel.createSel(req.body).then(function (success) {
    console.log(success);
    res.json({ code: 1, msg: 'success', data: success });
  }).catch(function (err) {
    console.log(err);
    res.json({ code: 0, msg: 'error' });
  });
}
function list(req, res, next) {
  if (req.body.username.length === 10) {
    PreSel.listStudent(req.body).then(function (response) {
      res.json({ code: 1, msg: 'success', data: response });
    }).catch(function (err) {
      res.json({ code: 0, msg: 'query pre sel error' });
    });
  } else {
    PreSel.list(req.body).then(function (response) {
      res.json({ code: 1, msg: 'success', data: response });
    }).catch(function (err) {
      res.json({ code: 0, msg: 'query pre sel error' });
    });
  }
}
function update(req, res, next) {
  PreSel.shouldUpdate(req.body).then(function (ok) {
    var sUpdate = true;
    if (ok) {
      ok[0].map(function (item, index) {
        if (item.psr_state === 'D') {
          sUpdate = false;
        }
        return item;
      });
    }
    if (sUpdate) {
      PreSel.update(req.body).then(function (response) {
        res.json({ code: 1, msg: 'success', data: response });
      }).catch(function (err) {
        res.json({ code: 0, msg: 'update presel error' });
      });
    } else {
      res.json({ code: -1, msg: 'This Student Had A Define Selection' });
    }
  }).catch(function (no) {
    console.log(no);
  });
}
module.exports = { selection: selection, list: list, update: update };