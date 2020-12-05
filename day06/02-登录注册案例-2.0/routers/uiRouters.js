const express = require('express')
const router = express.Router()

const path = require('path')

const cookieParser = require('cookie-parser')
// 使用cookie-parser
// router.use(cookieParser())

//返回登录页面
router.get('/login', (req, res) => {
  // 拼接路径
  //   path.join/resolve
  const url = path.join(__dirname, '../public/login.html')
  // 读取login.html文件,然后返回给浏览器
  res.sendFile(url)
})
//返回注册页面
router.get('/register', (req, res) => {
  // 拼接路径
  // path.join/resolve
  const url = path.join(__dirname, '../public/register.html')
  /// 读取register.html文件,然后返回给浏览器
  res.sendFile(url)
})
//返回个人中心页面
router.get('/userCenter', (req, res) => {
  const { username } = req.cookies
  //如果要返回一个ejs模板,应该使用res.render方法
  // render的第一个参数,就是ejs模板的路径.可以直接写文件名, 第二个参数是传入到ejs的数据
  //判断有没有cookie传上来,如果有,表示登录过了.就直接展示个人中心.如果没有就跳到login页面
  if (username) {
    // 表示登录过
    res.render('userCenter', { username })
  } else {
    //表示没有登录过
    res.redirect('http://localhost:5000/login')
  }
})

module.exports = router

// 1. 下载ejs
// 2. 配置ejs
// 3. 定义模板中的html结构
// 4. 需要配置访问个人中心的路由(get)
// 5. 个人中心路由中, 渲染模板: res.render('userCenter', { username })
// 6. 登录成功之后
//     res.cookie('username', username) 让浏览器存储一个cookie数据
//     res.redirect('个人中心的页面')
// 7. 回头把用户名传入到模板里面, <%= username%>
// 8.在个人中心的路由里面,判断一下,从req.cookies里面能不能拿到username,如果能拿到,直接渲染个人中心.如果没有,就重定向到登录页面
