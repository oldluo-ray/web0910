/**
 *  url: 协议://域名:端口号/路径?查询字符串#hash值
 *
 *  http协议: 互联网中通讯指定的一套规则. 主要规定了请求报文和响应报文
 *  请求报文格式:  请求行
 *                请求头
 *                空行
 *                请求体
 *  响应报文格式:  响应行
 *                响应头
 *                 空行
 *                响应体
 *
 *  get和post的区别:
 *  1. post相对安全
 *  2. get请求的参数在地址栏中显示,post请求在请求体中
 *  3. post有请求体,get没有请求体
 *  4. 请求数据用get,上传数据用post
 *  5. 由于地址栏有限制,所以get请求上传的数据有限, post请求理论上没有限制.但是直接服务器会限制
 *
 *  状态码:
 *   200  成功
 *   301  重定向 旧的资源没有了
 *   302  重定向 旧的资源还在
 *   304  读取缓存
 *   404  资源找不到,一般路径写错了
 *   500  服务器内部错误
 *
 *   express路由
 *   请求的方法是get/post,并且请求的路径和定义的路由是一样的.回调函数就会触发. 后面的路由就不执行了
 *   app.get/post('路由',(request,response)=>{})
 *   请求对象的方法和属性:
 *   查询字符串: req.query
 *   路由参数: req.params     /路径/:参数名?   问号表示可选
 *   获取请求头: req.get('xxx')
 *   获取请求体: req.body
 *
 *   响应对象的方法和属性:
 *   res.send('字符串') 返回字符串
 *   res.download('相对路径'/'绝对路径') 让浏览器下载文件
 *   res.sendFile('绝对路径') 返回的数据,浏览器会根据数据类型选择展示/下载
 *   res.redirect('url')  重定向
 *   res.set()  操作响应头
 *   res.get()
 *
 *   注意: 在响应之前去操作request和response对象. 响应之后的代码是不执行的
 * 
 * 
 *   express中间件: 
 *       中间件其实就是一个函数
 *       1. 应用级  app.use(()=>{})
 *       2. 内置    app.use(express.urlencoded({extended: true})) app.use(express.static('路径'))
 *       3. 第三方  body-parser 第三方下载以及引入  app.use(bodyParser.urlencoded({extended: true}))
 *
 *
 *
 *
 *
 *
 */
