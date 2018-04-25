const express = require('express')
const thesisCheckCtrl = require('../controllers/thesisCheck.controller')
const router = express.Router()
router.route('/').get(thesisCheckCtrl.list).put(thesisCheckCtrl.update);

module.exports = router;