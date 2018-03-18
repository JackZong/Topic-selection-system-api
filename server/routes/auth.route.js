import express from 'express'
import validate from 'express-validation'
import paramValidation from '../../config/param-validation'
import authCtrl from '../controllers/auth.controller'
// express.Router类可以创建模块化、链式路由句柄
const router = express.Router()
// returns token if correct username and password
router.post('/login',validate(paramValidation.login),authCtrl.login)
export default router