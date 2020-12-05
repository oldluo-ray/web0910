const express = require('express')
const { resolve } = require('path')
const router = express.Router()

const path = require('path')

router.get('/login', (req, res) => {
  // 拼接路径
  //   path.join/resolve
  const url = path.join(__dirname, '../public/login.html')
  // 读取login.html文件,然后返回给浏览器
  res.sendFile(url)
})

router.get('/register', (req, res) => {
  // 拼接路径
  // path.join/resolve
  const url = path.join(__dirname, '../public/register.html')
  /// 读取register.html文件,然后返回给浏览器
  res.sendFile(url)
})

module.exports = router
