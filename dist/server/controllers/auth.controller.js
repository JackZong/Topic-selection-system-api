'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  username: 'react',
  password: 'express'
};

function login(req, res, next) {
  console.log('do login');
  console.log(_typeof(req.body));
  var user = {
    username: req.body.username,
    password: req.body.password
  };
  _user2.default.login(user).then(function (re) {
    console.log(re.recordset[0]);
    if (re.recordset[0].st_password === user.password) {
      console.log('login success');
      res.json({
        code: 1,
        msg: 'success'
      });
    }
  }).catch(function (err) {
    console.log(err, 'login');
  });
  return next();
}
exports.default = { login: login };