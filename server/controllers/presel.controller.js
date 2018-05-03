const PreSel = require('../models/presel.model')
function selection(req,res,next){
  PreSel.createSel(req.body).then(success => {
  	console.log(success)
  	res.json({ code: 1, msg: 'success',data:success})
  }).catch(err => {
  	console.log(err)
  	res.json({ code: 0, msg: 'error'})
  })
}
function list(req,res,next){
  if(req.body.username.length === 10) {
    PreSel.listStudent(req.body).then(response => {
      res.json({ code: 1, msg: 'success', data: response })
    }).catch(err => {
       res.json({ code: 0, msg: 'query pre sel error' })
    })
  } else {
    PreSel.list(req.body).then(response => {
      res.json({ code: 1, msg: 'success', data: response })
    }).catch(err => {
       res.json({ code: 0, msg: 'query pre sel error' })
    })
  }
}
function update(req,res,next) {
  PreSel.shouldUpdate(req.body).then(ok => {
    let sUpdate = true
    if(ok) {
      ok[0].map((item,index) => {
        if(item.psr_state === 'D') {
         sUpdate = false
        }
        return item
      })
    }
    if(sUpdate) {
        PreSel.update(req.body).then(response => {
           res.json({ code:1,msg: 'success',data: response})
        }).catch(err => {
          res.json({ code:0,msg: 'update presel error'})
        })
      } else {
        res.json({ code:-1,msg: 'This Student Had A Define Selection'})
      }
  }).catch(no => {
    console.log(no)
  })
}
module.exports = { selection, list, update }
