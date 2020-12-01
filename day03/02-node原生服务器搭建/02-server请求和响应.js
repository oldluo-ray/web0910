/** 
1. 引入http模块,用于搭建服务器
   const http = require('http')
2. 创建服务器对象
   const server = http.createServer((request, response) => {
   2.0 
   客户端的所有请求,都会被这个回调函数监听到
   2.1
   request 是请求对象,包含客户端传递过来的所有数据
   response 是响应对象,用于给客户端响应数据
   2.2 
   request.url 可以获取客户端通过get请求传递过来的数据
   2.3
   const queryString = require('querystring') querystring可以将查询字符串,转成一个对象
   const obj = queryString.parse(str) 将查询字符串转成对象的方法
   2.4 设置响应头
   response.setHeader('content-type', 'text/html;charset=utf-8')
   2.5 设置响应信息,并且响应给客户端
   response.end('<h3>服务器返回的结果</h3>')
})

3. 开启服务器
server.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/

//node中提供了一个http模块,帮我们快速搭建服务
const http = require('http')
// querystring模块是node中提供的模块,用来把查询字符串,转成对象
const queryString = require('querystring')

// 利用http模块创建服务对象
const server = http.createServer((request, response) => {
  // 注意: 只要客户端发送请求过来,这个回调函数就会被调用
  // request表示请求对象 里面存储了客户端传过来的所有数据
  // response 表示响应对象 利用response对象的 方法来回应客户端
  //请求
  console.log(request.url)
  const str = request.url.split('?')[1]

  const data = queryString.parse(str)
  console.log(data)

  // 响应

  // response.end('<h3>这是服务器返回的数据</h3>')
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('<h3>服务器返回的数据</h3>')

  // 注意:如果node中服务器端的代码修改了,想要让最新的代码执行.必须重启服务器.我们开发者每一次手动重新启动服务器非常麻烦. 所以使用一个工具 nodemon 帮我们重启服务器
  //   npm i nodemon -g
})

// 开启服务
// 一般我们自己写的服务的端口号: 3000, 5000, 8080
server.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功了~localhost:5000')
})
