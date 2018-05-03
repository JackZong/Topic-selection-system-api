const express = require('express')
const mentorCtrl = require('../controllers/mentor.controller')
const router = express.Router()
router.post('/list',mentorCtrl.list);
module.exports = router;