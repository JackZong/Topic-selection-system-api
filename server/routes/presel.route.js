const express = require('express')
const preselCtrl = require('../controllers/presel.controller')
const router = express.Router()
router.put('/add').get(preselCtrl.selection);
router.post('/list',preselCtrl.list);
module.exports = router;