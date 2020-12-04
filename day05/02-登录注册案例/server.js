;(async () => {
  // 建议: 先连接数据库,数据库连接成功了,再去开启服务器
  const db = require('./db/db')
  await db
  const express = require('express')
  const userModel = require('./model/model')

  const app = express()

  //配置路由
  // 配置返回登录和注册页面的路由
  // 由于使用中间件express.static可以快速返回静态资源
  app.use(express.static('public'))
  // 解析post请求的数据,并且添加到body身上
  app.use(express.urlencoded({ extended: true }))

  // 定义接收用户注册的请求的路由
  app.post('/register', async (req, res) => {
    // console.log(req.body)
    const { email, psw, username } = req.body
    // 将这个数据,添加到数据库中
    // 记住: model对象的crud方法,返回的都是promise
    await userModel.create({
      email,
      psw,
      username
    })

    res.send('注册成功')
  })

  app.listen(5000, err => {
    if (err) console.log(err)
    else console.log('服务器启动成功~localhost:5000')
  })
})()
