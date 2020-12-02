//#region
/**
 * 
1. 引入express
const express = require('express')
2. 使用express创建一个应用对象
const app = express()
// 在响应头中不显示后台是使用哪种开发语言或库
app.disable('x-powered-by')

3.监听get请求 第一个参数是请求的路径
app.get('/', (request, response) => {
  request.query //获取get请求的查询字符串
  // 响应数据
  response.send('<h3>express返回的数据</h3>')
})
4. 监听post请求
app.post('/',(request,response)=>{
  response.body 获取post请求上传的数据,但是默认拿不到,需要使用中间件配合
  response.send('接收到了post请求')
})

5. 开启服务器
app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})


* 一、请求对象（request）
*     request.query  获取GET请求的查询字符串参数获取到的是一个对象
*     request.params 获取GET请求的参数路由中的参数，拿到的是一个对象
*     request.body   获取POST请求的请求体中的参数（必须要借助一个中间件才可以）
*     request.get('xxx') 获取请求头中指定的信息
*
* 二、响应对象（response）
      response.body 获取post请求上传上来的数据,但是默认拿不到
*     response.send('xxxxx') 给客户端一个回应
*     response.download('相对路径') 给浏览器返回一个下载的响应
*     response.sendFile('绝对路径') 给浏览器发送一个文件，浏览器根据文件的种类，决定如何去展示。
*     response.redirect('网址') 重定向到一个新的网址
*     response.set('key','value') 自定义响应头
*     response.get('key') 获取响应头中的指定内容
*
* 
*/
//#endregion
const express = require('express')
const app = express()
// 禁止在响应头中,返回x-power-by这个信息
app.disable('x-powered-by')

// 路由
// 如果url的路径是/ 并且请求方式是get.
// 接收url中查询字符串的参数
app.get('/', (request, response) => {
  // console.log('服务器接收到一个get请求')
  console.log(request.query) // 获取到get请求的查询字符串的数据
  response.send('服务器响应的数据')
})

// 接收路由参数
// 写在路径后面的参数,就是所谓的路由参数
// 路由参数一般都是一些数字.表示分页,id之类的
// 定义路由的时候,要配置路由参数: /:参数名
// 如果没有问号,表示这个参数必须写, 有问号就可以不写
// app.get('/test/:page/:pageSize?', (request, response) => {
//   // console.log('服务器接收到一个get请求')
//   console.log(request.params) //获取get请求上传上来的路由参数
//   response.send('服务器响应的数据')
// })

// 获取请求头中的信息,
app.get('/test', (request, response) => {
  console.log(request.get('host'))
  console.log(request.get('user-agent'))
  response.send('/test响应-获取请求头的信息')
})

// 响应对象身上常用的属性和方法
app.get('/test/a', (req, res) => {
  // res.send('响应内容') //一般用来返回一个字符串
  // download方法可以下载任何文件,可以写相对路径,也可以写绝对路径
  // res.download('./music.mp3')
  // res.download('./队列.jpg')
  // res.download(__dirname + '/防盗链.txt')

  //sendFile
  // 注意: sendFile只能使用绝对路径
  // 如果返回的类型可以坐在浏览器中展示,则直接展示,否则下载
  // res.sendFile(__dirname + '/队列.jpg')
  // res.sendFile(__dirname + '/music.mp3')
  // res.sendFile(__dirname + '/防盗链.txt')
  // res.sendFile(__dirname + '/demo')

  // 重定向
  // res.redirect('http://www.baidu.com')

  // 操作响应头
  // res.get('属性名)
  // res.set('属性名', 值)
  // console.log(res.get('location'))
  // res.set('abc', 123)
  // res.set('content-length', 12)
  res.send('响应')
})

// app.post('/', (request, response) => {
//   console.log('服务器接收到一个post请求')
//   response.send('服务器响应的数据-post')
// })

app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
