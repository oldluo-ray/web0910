//#region
/*
* 中间件（middleWare）？
*   本质就是一个函数，有三个参数（request,response,next）
   app.use(中间件)
*
* 组成：
*   1.request对象
*   2.response对象
*   3.next函数
*
* 作用：
*   1)	执行任何代码。
    2)	修改请求和响应对象。
    3)	终结请求-响应循环。（当一个请求来到服务器的时候，服务器开始处理，终结本次请求）
    4)	调用（堆栈中的）下一个中间件。

  分类：
      1.应用级中间件
          --1.修改请求和响应对象  2.拦截非法请求
      2.第三方中间
          --不是express提供的，使我们自己下载的
          app.use(bodyParser.urlencoded({extended:true}))
      3.express内置中间件
          --express给我们提供的中间件
          --app.use(express.urlencoded({extended:true}))
          --app.use(express.static('public'))
      4.路由器中间件
          --后期在路由器章节详细解释


  备注：
      1.在服务器中，客户端的一个请求达到服务端后，服务器只会做出一次响应，做出响应以后，不可以再修改request，和response
      2.在express中，当你定义路由和中间件的时候，会把你定义的东西按照定义的顺序（代码的顺序）放在类似于数组的容器中
        当请求过来的时候，依次从类数组的容器中拿出进行匹配，一旦匹配成功交给当前的处理，后续的都失效。
      3.当一个请求到达express服务器时，不管经过多少次的加工，所有路由和中间件中的request以及response，都是对第一次的引用。
*
* */
//#endregion
const express = require('express')
const app = express()
// 注意:这里使用了一个express内置的中间件
//express.urlencoded({ extended: true }) 最终返回了一个中间件函数,这个中间件里面将post上传的数据,进行解析,然后添加到response.body上面.最后调用了next()
// app.use(express.urlencoded({ extended: true }))
// // app.use中的传入的这个函数,就是一个应用级的中间件
// express中会将所有的路由放到一个数组中, 请求发送来之后,从数组中按照顺序(书写顺序)去匹配这个请求,如果匹配上就执行对应的回调函数.后面就不会再匹配了

// app.use((req, res, next) => {
//   console.log('中间件执行了')
//   req.abc = 123
//   next() //next函数调用,下一个路由/中间件才会执行
// })

// 使用第三方的中间件
// 1. 下载
// 2. 引入
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

// 路由
app.post('/test', (request, response) => {
  // 获取post请求请求体中的数据
  console.log(request.body)
  console.log(request.abc)
  response.send('服务器响应的数据-post')
})

app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
