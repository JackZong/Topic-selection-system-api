'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth.route');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/health', function (req, res) {
  _user2.default.getList.then(function (re) {
    res.json(re.recordset);
  }).catch(function (err) {
    console.log(err);
  });
});
// mount auth routes
router.use('/auth', _auth2.default);

exports.default = router;