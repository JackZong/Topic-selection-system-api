const express = require('express')
const dashboardCtrl = require('../controllers/dashboard.controller')
const router = express.Router()
router.get('/',dashboardCtrl.list);
module.exports = router;