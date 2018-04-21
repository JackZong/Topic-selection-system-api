const PreSel = require('../models/presel.model')
function selection(req,res,next){
  PreSel.createSel(req.body).then(success => {
  	console.log(success)
  }).catch(err => {
  	console.log(err)
  })
}
function list(req,res,next){
  PreSel.list(req.body).then(response => {
    res.json({ code: 1, msg: 'success', data: response })
  }).catch(err => {
  	 res.json({ code: 0, msg: 'query pre sel error' })
  })
}
module.exports = { selection, list }
