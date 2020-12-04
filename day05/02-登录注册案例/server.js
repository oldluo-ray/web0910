const express = require('express')

const app = express()

//配置路由
// 配置返回登录和注册页面的路由
// 由于使用中间件express.static可以快速返回静态资源
app.use(express.static('public'))

app.listen(5000,(err)=>{
    if(err) console.log(err)
    else console.log('服务器启动成功~localhost:5000')
})