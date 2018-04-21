const express = require('express')
const thesisApplyCtrl = require('../controllers/thesisApply.controller')
const router = express.Router()
router.post('/list',thesisApplyCtrl.list)
module.exports = router;