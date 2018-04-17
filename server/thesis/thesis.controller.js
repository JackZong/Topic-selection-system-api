const Thesis = require('./thesis.model')
function list(req,res,next){
	Thesis.list().then(response => {
		res.json(response)
	}).catch(err => {
		console.log('thesis query',err)
		res.json({code: -1, msg: 'thesis query api error'})
	})
}
module.exports = { list }
