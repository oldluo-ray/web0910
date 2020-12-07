const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  setTimeout(() => {
    res.send('响应')
  }, 3000)
  console.log(req.query)
})

app.post('/test', (req, res) => {
  res.send('响应')
  console.log(req.body)
})

app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
