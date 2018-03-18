import jwt from 'jsonwebtoken'
import httpStatus from 'http-status'
import config from '../../config/config'
import userModel from '../models/user.model'
const user = {
	username: 'react',
	password: 'express'
}

function login (req, res, next) {
  console.log('do login')
  console.log(typeof req.body)
  let user = {
    username: req.body.username,
    password: req.body.password
  }
  userModel.login(user).then((re) => {
    console.log(re.recordset[0])
    if(re.recordset[0].st_password === user.password){
      console.log('login success')
      res.json({
        code: 1,
        msg: 'success'
      })
    }
  }).catch(err => {
    console.log(err,'login')
  })
  return next()
}
export default { login }