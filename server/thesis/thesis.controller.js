const Thesis = require('./thesis.model')
function list(req,res,next){
	Thesis.list(req.query).then(response => {
		Thesis.count().then(count => 
			res.json({code:1,msg: 'success',data:response, page: { 
				count: count.length,
				page: parseInt(req.query.page) || 0,
				page_limit: parseInt(req.query.page_limit)  || 20
			}})
		).catch(err=>{
          res.json({code: -1, msg: 'get count error'})
		})
	}).catch(err => {
		console.log(err)
		res.json({code: -1, msg: 'thesis query api error'})
	})
}
function add(req,res,next){
	Thesis.add(req.body).then(response => {
	  res.json({code:1,msg: 'success' })
	}).catch(err => {
		console.log(err)
		res.json({code: -1, msg: 'thesis add api error'})
	})
}
function update(req,res,next){
	Thesis.update(req.body).then(response => {
	  res.json({code:1,msg: 'success' })
	}).catch(err => {
		console.log(err)
		res.json({code: -1, msg: 'thesis update api error'})
	})
}
module.exports = { list, add, update }
