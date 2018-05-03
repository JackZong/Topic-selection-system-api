const Mentor = require('../models/mentor.model')
function list(req,res,next){  
    Mentor.list().then(response => {
    	console.log(response)
      res.json({ code: 1, msg: 'success', data: response[0] })
    }).catch(err => {
    	console.log(err)
       res.json({ code: 0, msg: 'query teacher list error' })
    })
}
module.exports = { list }
