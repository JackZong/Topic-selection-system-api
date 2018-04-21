'use strict';

var express = require('express');
var validate = require('express-validation');
var paramValidation = require('../../config/param-validation');
var userCtrl = require('./user.controller');
var router = express.Router();

router.route('/list').get(userCtrl.list).post(validate(paramValidation.createUser), userCtrl.create);
router.route('/login').post(validate(paramValidation.login), userCtrl.login);
module.exports = router;