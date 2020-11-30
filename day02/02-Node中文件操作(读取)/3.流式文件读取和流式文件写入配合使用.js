// 需求: 将当前路径下的music.mp3, 写入到当前路径下的另一个MP3文件. music2.mp3

const fs = require('fs')

// 开启写入流
const ws = fs.createWriteStream('./music2.mp3')

// 开启读取流
const rs = fs.createReadStream('./music.mp3')

// 监听读取流
rs.on('open', () => {
  console.log('读取流开启了')
})
rs.on('close', () => {
  console.log('读取流关闭了')
  // 读取文件结束的时候,就意味着也已经写完了.所以要关闭写入流
  ws.end()
})

rs.on('data', data => {
  console.log(data)
  // 注意由于读取的数据,是在这里获取的到的.所以写入的代码,要在这里执行
  ws.write(data)
})

// 写入流
ws.on('open', () => {
  console.log('写入流开启了')
})
ws.on('close', () => {
  console.log('写入流关闭了')
})
