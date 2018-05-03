'use strict';

var Message = require('../models/message.model');
function add(req, res, next) {
  console.log(req);
  Message.add(req.body).then(function (response) {
    console.log(response);
    res.json({ code: 1, msg: 'success' });
  }).catch(function (err) {
    console.log(err);
    res.json({ code: 0, msg: 'query teacher list error' });
  });
}
function getMyMsg(req, res, next) {
  Message.getMyMsg(req.body).then(function (response) {
    res.json({ code: 1, msg: 'success msg', data: response });
  }).catch(function (err) {
    res.json({ code: 0, msg: 'query error' });
  });
}
module.exports = { add: add, getMyMsg: getMyMsg };