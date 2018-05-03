import express from 'express'
import authRouters from './server/auth/auth.route'
import userRoutes from './server/user/user.route'
import thesisRoutes from './server/thesis/thesis.route'
import preSelRoutes from './server/routes/presel.route'
import thesisApplyRoutes from './server/routes/thesisapply.route'
import logsRoutes from './server/routes/logs.route'
import dashboardRoutes from './server/routes/dashboard.route'
import profileRoutes from './server/routes/profile.route'
import thesisCheckRoutes from './server/routes/thesischeck.route'
import teacherRoutes from './server/routes/mentor.route'
import messageRoutes from './server/routes/message.route'
const router = express.Router()
router.get('/help-check',(req,res) => {
	res.send('OK')
})
router.use('/users/', userRoutes)
router.use('/student/', userRoutes)
router.use('/thesis/', thesisRoutes)
router.use('/preselection/',preSelRoutes)
router.use('/thesisapply/',thesisApplyRoutes)
router.use('/logs/',logsRoutes)
router.use('/dashboard/',dashboardRoutes)
router.use('/profile/',profileRoutes)
router.use('/thesischeck/',thesisCheckRoutes)
router.use('/teacher/',teacherRoutes)
router.use('/message/',messageRoutes)
module.exports = router