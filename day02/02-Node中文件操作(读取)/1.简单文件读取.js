/*
 * 简单文件读取：
 *   fs.readFile(path[, options], callback)
 *           --path:要写入的文件路径+文件名+文件后缀
 *           --options：配置对象
 *               --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *               --encoding ：编码，默认是：'utf-8'
 *           --callback：回调函数
 *
 */

const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
  // err 错误信息
  // data就是读取到的数据 默认是buffer对象
  if (err) console.log(err)
  console.log(data.toString())
})
