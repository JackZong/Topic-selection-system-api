function getQueryObj(queryStr){
	console.log(queryStr)
  let arr = queryStr.split("&")
  let obj = {}
  arr.forEach((item,index,arr) => {
   let temp = item.split('=')
   obj[temp[0]] = temp[1]
  })
  console.log(obj,'obj')
  return obj
}
module.exports = { getQueryObj }