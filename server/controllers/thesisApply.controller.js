const ThesisApply= require('../models/thesisapply.model')
function list(req,res,next){
  ThesisApply.list(req.body).then(response => {
  	res.json({ code:1,msg: 'success',data: response })
  }).catch(err => {
  	res.json({ code:0,msg: 'query thesisapply failed' })
  })
}
function updateThesis(req,res,next) {
	//ThesisApply.update()
}
module.exports = { list }
