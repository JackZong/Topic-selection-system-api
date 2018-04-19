const User = require('./user.model')
function load(req, res, next, id) {
	User.get(id).then((user) => {
		req.user = user
		return next()
	}).catch(e => next(e))
}
function get(req, res) {
	return res.json(req.user)
}
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query
  return res.json(User.list())
}
function create(req,res,next) {
	const user = new User({
		username: req.body.username,
		mobileNumber: req.body.mobileNumber
	})
	user.save()
	  .then(saveUser => res.json(savedUser))
	  .catch(e => next(e))
}
function update(req,res,next) {
	const { limit = 50, skip = 0 } = req.query
	User.list({ limit, skip }).then().catch()
}
function remove(req,res,next) {
	const user = req.user
	user.remove().then().catch()
}
function login(req,res,next) {
	User.login(req.body).then(response => {
		if(response.st_password === req.body.password) {
			res.json({ code: 1, msg: 'login suceess', data: { username: req.body.username }}) 
		} else {
			res.json({ code: 0, msg: 'password not correct' })
		}
	}).catch(err => {
		console.log('login fail',err)
		res.json({ code: -1, msg: 'request error' }) 
	})
}
module.exports = { load, list, create, update, remove, login }