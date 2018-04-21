const express = require('express')
const thesisCtrl = require('./thesis.controller')
const router = express.Router()
router.route('/list').get(thesisCtrl.list);
router.put('/add',thesisCtrl.add)
router.put('/update',thesisCtrl.update)
module.exports = router;