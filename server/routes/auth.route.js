const express = require('express') 
const validate = require('express-validation') 
const paramValidation = require('../../config/param-validation') 
const authCtrl = require('../controllers/auth.controller') 
// express.Router类可以创建模块化、链式路由句柄
const router = express.Router()
// returns token if correct username and password
router.post('/login',validate(paramValidation.login),authCtrl.login)
export default router