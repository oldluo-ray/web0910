// 存放链接数据库的代码
const mongoose = require('mongoose')

module.exports = new Promise((resolve, reject) => {
  // 连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/web0910', {})

  // 监听连接是否成功
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功')
    resolve()
  })
})
