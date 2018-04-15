import express from 'express'
import authRouters from './server/auth/auth.route'
import userRoutes from './server/user/user.route'
import thesisRoutes from './server/thesis/thesis.route'
const router = express.Router()
router.get('/help-check',(req,res) => {
	res.send('OK')
})
router.use('/users/', userRoutes)
router.use('/thesises/', thesisRoutes)
module.exports = router