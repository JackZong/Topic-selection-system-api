import httpStatus from 'http-status'
import pool from '../../config/mssql'
const getList = pool().then(res=>{
	return res.query`select * from Class`
}).catch(err => {
	console.log(err)
})
const login = (params) => {
	console.log(typeof params.username)
 	return pool().then(request => {
		return request.query `SELECT st_password FROM Student WHERE st_id = ${params.username}`
	}).catch(err =>{
		console.log(err)
	})	
} 
module.exports = {
	getList,
	login
}