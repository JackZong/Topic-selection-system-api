const Thesis = require('./thesis.model')
function list(req,res,next){
	Thesis.list(req.query).then(response => {
		Thesis.count().then(count => 
			res.json({code:1,msg: 'success',data:response, page: { 
				count: count.length,
				page: parseInt(req.query.page),
				page_limit: parseInt(req.query.page_limit) 
			}})
		).catch(err=>{
          res.json({code: -1, msg: 'get count error'})
		})
	}).catch(err => {
		console.log(err)
		res.json({code: -1, msg: 'thesis query api error'})
	})
}
module.exports = { list }
