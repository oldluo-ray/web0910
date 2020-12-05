// 连接数据库
const mongoose = require('mongoose')

module.exports = new Promise((resolve, reject) => {
  // 连接
  // 如果没有当前数据库,会自动创建
  mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  //监听
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功')
    resolve()
  })
})
