const PreSel = require('../models/presel.model')
function selection(req,res,next){
  PreSel.createSel(req.body).then(success => {
  	console.log(success)
  }).catch(err => {
  	console.log(err)
  })
}
module.exports = { selection }
