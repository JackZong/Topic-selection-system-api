'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var express = require('express');
var validate = require('express-validation');
var paramValidation = require('../../config/param-validation');
var authCtrl = require('../controllers/auth.controller');
// express.Router类可以创建模块化、链式路由句柄
var router = express.Router();
// returns token if correct username and password
router.post('/login', validate(paramValidation.login), authCtrl.login);
exports.default = router;