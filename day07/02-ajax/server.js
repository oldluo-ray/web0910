const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  let arr = [{ name: 'zs', age: 18 }, { name: 'ls', age: 20 }]
  const arrStr = JSON.stringify(arr)

  // req.query ==> {callback: getData}
  const callback = req.query.callback

  res.send(callback + '(' + arrStr + ')') // getData([{ name: 'zs', age: 18 }, { name: 'ls', age: 20 }])
})

app.post('/test', (req, res) => {
  let arr = [{ name: 'zs', age: 18 }, { name: 'ls', age: 20 }]
  //   setTimeout(() => {
  res.send(arr)
  //   }, 4000)

  console.log(req.body)
})

app.post('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send('数据')
})
app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
