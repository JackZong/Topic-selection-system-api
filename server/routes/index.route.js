const express = require('express') 
const authRoutes = require('./auth.route') 
const userModel = require('../models/user.model') 
const router = express.Router()
router.get('/users', (req,res) => {
	
})
export default router