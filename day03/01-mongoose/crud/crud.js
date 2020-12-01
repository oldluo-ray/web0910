// 现在想要在crud这个文件中,得到数据库是否连接成功的消息
const db = require('../db/db')
// 导入model对象
const teaModel = require('../model/model')
// db是一个promise对象,如果这个promise对象最终是成功的结果,await后面的代码才会执行,否则不执行
;(async () => {
  await db
  console.log(11111)

  // 对数据库,具体的增删改查的代码
})()
