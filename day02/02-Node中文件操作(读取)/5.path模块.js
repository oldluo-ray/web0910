const fs = require('fs')
// 使用path模块,来帮助我们拼接路径
const path = require('path')

// join方法可以将所有参数拼接起来,自动加/
const allPath = path.join(__dirname, 'hello.txt')
console.log(allPath)
// C:\Users\luodianlei\Desktop\node\04-上课代码\day02\02-Node中文件操作(读取)\hello.txt

fs.readFile(allPath, (err, data) => {
  // err 错误信息
  // data就是读取到的数据 默认是buffer对象
  if (err) console.log(err)
  console.log(data.toString())
})
