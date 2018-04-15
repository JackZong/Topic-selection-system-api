import express from 'express'
import authRoutes from './auth.route'
import userModel from '../models/user.model'
const router = express.Router()
// router.get('/health', (req,res)=>{
//    userModel.getList.then((re)=>{
//     res.json(re.recordset)
//    }).catch(err=>{
//    	console.log(err)
//    }) 
// })
// router.get('/thesis/list',(req,res) => {
	
// })
// // mount auth routes
// router.use('/auth',authRoutes)
router.get('/users', (req,res) => {
	
})
export default router