const express = require('express')
const preselCtrl = require('../controllers/presel.controller')
const router = express.Router()
router.put('/add').get(preselCtrl.selection);
module.exports = router;