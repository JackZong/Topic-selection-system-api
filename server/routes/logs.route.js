const express = require('express')
const logsCtrl = require('../controllers/logs.controller')
const router = express.Router()
router.post('/list',logsCtrl.list);
module.exports = router;