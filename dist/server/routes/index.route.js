'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth.route');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// router.get('/health', (req,res)=>{
//    userModel.getList.then((re)=>{
//     res.json(re.recordset)
//    }).catch(err=>{
//    	console.log(err)
//    }) 
// })
// router.get('/thesis/list',(req,res) => {

// })
// // mount auth routes
// router.use('/auth',authRoutes)
router.get('/users', function (req, res) {});
exports.default = router;