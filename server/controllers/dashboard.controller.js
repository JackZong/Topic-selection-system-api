const Dashboard = require('../models/dashboard.model')
function list(req,res,next){
  Dashboard.list().then(success => {
  	success = success[0].slice(0,10)
  	res.json({ code: 1, msg: 'success', data: success })
  }).catch(err => {
  	console.log(err)
  	res.json({ code: 0, msg: 'query failed' })
  })
}
module.exports = { list }
