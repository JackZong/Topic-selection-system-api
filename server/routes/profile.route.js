const express = require('express')
const profileCtrl = require('../controllers/profile.controller')
const router = express.Router()
router.post('/',profileCtrl.findOne);
module.exports = router;