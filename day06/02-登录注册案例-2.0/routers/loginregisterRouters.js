const express = require('express')
const router = express.Router()
const userModel = require('../model/model')

// 定义接收用户注册的请求的路由
router.post('/register', async (req, res) => {
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

//定义一个接受用户登录的请求的路由
router.post('/login', async (req, res) => {
  // 获取用户上传的数据
  let { email, psw } = req.body
  // 去数据库中查询,看是否有这个账户
  const user = await userModel.findOne({ email, psw })
  // console.log(user)
  if (user) {
    // 登录成功
    res.send('登录成功')
  } else {
    // 登录失败
    res.send('账号或密码错误,请求重新输入')
  }
})

module.exports = router
