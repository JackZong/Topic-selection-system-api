import express from 'express'
import authRoutes from './auth.route'
import userModel from '../models/user.model'
const router = express.Router()
router.get('/health', (req,res)=>{
   userModel.getList.then((re)=>{
    res.json(re.recordset)
   }).catch(err=>{
   	console.log(err)
   }) 
})
// mount auth routes
router.use('/auth',authRoutes)

export default router