const express = require('express')
const validate = require('express-validation')
const paramValidation = require('../../config/param-validation')
const userCtrl = require('./user.controller')
const router = express.Router()

router.route('/list')
  .get(userCtrl.list)
  .post(validate(paramValidation.createUser),userCtrl.create);
router.route('/login')
  .post(validate(paramValidation.login),userCtrl.login);
module.exports = router;