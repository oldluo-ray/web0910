const express = require('express')

const app = express()

app.use(express.static('public'))

app.listen(5000, () => {
  console.log('静态资源服务器开启成功')
})
