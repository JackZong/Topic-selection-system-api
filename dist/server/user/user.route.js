'use strict';

var express = require('express');
var validate = require('express-validation');
var paramValidation = require('../../config/param-validation');
var userCtrl = require('./user.controller');
var router = express.Router();

router.route('/').get(userCtrl.list).post(validate(paramValidation.createUser), userCtrl.create);
// router.route('/:userId')
//   .get(userCtrl.get)
//   .put(validate(paramValidation.updateUser),userCtrl.update)
//   .delete(userCtrl.remove);
// router.param('userId',userCtrl.load)
module.exports = router;