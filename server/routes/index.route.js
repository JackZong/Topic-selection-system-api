import express from 'express'
import authRoutes from './auth.route'
import userModel from '../models/user.model'
const router = express.Router()
router.get('/users', (req,res) => {
	
})
export default router