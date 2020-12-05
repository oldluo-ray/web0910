;(async () => {
  // 建议: 先连接数据库,数据库连接成功了,再去开启服务器
  const db = require('./db/db')
  await db
  const express = require('express')

  const loginregisterRouter = require('./routers/loginregisterRouters')
  const uiRouter = require('./routers/uiRouters')

  const app = express()
  //配置路由
  // 配置返回登录和注册页面的路由
  // 由于使用中间件express.static可以快速返回静态资源
  app.use(express.static('public'))
  // 解析post请求的数据,并且添加到body身上
  app.use(express.urlencoded({ extended: true }))
  // 注意: 因为router写的路由中,要获取post请求的数据,所以使用router这个中间件,需要方法在解析post请求的数据后面
  app.use(loginregisterRouter)
  app.use(uiRouter)

  app.listen(5000, err => {
    if (err) console.log(err)
    else console.log('服务器启动成功~localhost:5000')
  })
})()
