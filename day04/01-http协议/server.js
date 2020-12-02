const express = require('express')
const app = express()

// 路由
app.get('/', (request, response) => {
  console.log('服务器接收到一个get请求')
  response.send('服务器响应的数据')
})
app.post('/', (request, response) => {
  console.log('服务器接收到一个post请求')
  response.send('服务器响应的数据-post')
})

app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
