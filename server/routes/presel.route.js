const express = require('express')
const preselCtrl = require('../controllers/presel.controller')
const router = express.Router()
router.put('/add',preselCtrl.selection);
router.post('/list',preselCtrl.list);
router.put('/update',preselCtrl.update);
module.exports = router;