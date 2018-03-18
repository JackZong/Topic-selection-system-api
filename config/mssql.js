import mssql from 'mssql'
import config from './config'
const { db } = config
function pool(callback) {
  return new mssql.ConnectionPool(db).connect()
} 
export default pool