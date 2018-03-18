import express from 'express'
import config from './config'
import routes from '../server/routes/index.route'
import bodyParser from 'body-parser'
const app = express()
if(config.env === 'dev') {
	console.log('this is a dev')
}
// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',routes)
export default app