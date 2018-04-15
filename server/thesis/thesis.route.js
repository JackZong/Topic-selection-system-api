const express = require('express')
const thesisCtrl = require('./thesis.controller')
const router = express.Router()
router.route('/').get(thesisCtrl.list);
module.exports = router;