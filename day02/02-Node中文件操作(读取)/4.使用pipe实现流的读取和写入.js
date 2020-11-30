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
})

// 写入流
ws.on('open', () => {
  console.log('写入流开启了')
})
ws.on('close', () => {
  console.log('写入流关闭了')
})

// 使用pipe
// pipe是流的一个方法
// pipe执行完之后,返回的还是流
rs.pipe(ws)
