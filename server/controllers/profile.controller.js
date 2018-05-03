const Profile = require('../models/profile.model')
function findOne(req,res,next){
  Profile.findOne(req.body).then(success => {
  	res.json({ code: 1, msg: 'success', data: success })
  }).catch(err => {
  	res.json({ code: 0, msg: 'query failed' })
  })
}
function update(req,res,next){
  Profile.update(req.body).then(success => {
  	res.json({ code: 1, msg: 'success', data: success })
  }).catch(err => {
  	res.json({ code: 0, msg: 'query failed' })
  })
}
module.exports = { findOne, update }
