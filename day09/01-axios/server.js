const express = require('express')
const cors = require('cors')
const { urlencoded } = require('body-parser')
const app = express()
app.use(cors())
// app.use(express.urlencoded({ extended: true })) //键=值&键=值
app.use(express.json()) // 将客户端传过来的json格式的数据,解析之后,添加到req.body上面
app.get('/test', (req, res) => {
  // let arr = [
  //   { name: '海静', age: 38 },
  //   { name: '呸华', age: 8 },
  //   { name: 'zs', age: 27 }
  // ]
  res.send(req.query)
})

app.post('/test', (req, res) => {
  // let arr = [
  //   { name: '海静', age: 38 },
  //   { name: '呸华', age: 8 },
  //   { name: 'zs', age: 27 }
  // ]
  res.send(req.body)
})

app.listen(5000)
