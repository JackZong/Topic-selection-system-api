const express = require('express')
const messageCtrl = require('../controllers/message.controller')
const router = express.Router()
router.post('/new',messageCtrl.add);
router.post('/my',messageCtrl.getMyMsg);
module.exports = router;