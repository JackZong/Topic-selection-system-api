const express = require('express')
const thesisCtrl = require('./thesis.controller')
const router = express.Router()
router.route('/list').get(thesisCtrl.list);
module.exports = router;