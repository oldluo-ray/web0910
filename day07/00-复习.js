/**
 *
 *  Router: 路由器 作用: 拆分代码
 *  使用:
 * 1. 获取路由器对象 const router = express.Router()
 * 2. 使用路由器对象,去配置路由: router.get/post()
 * 3. 一般会将所有的路由,拆分成多个文件,将某个文件的router导出
 * 4. 在开启服务器的文件中,使用这个路由器 app.use(router)
 *
 *
 *  ejs: 后端渲染的时候,需要把动态数据,渲染到页面中 (模板引擎)
 *  使用:
 *  1. 下载  npm i ejs
 *  2. 配置
 *     app.set('view engine', 'ejs') 告诉node,当前使用的模板引擎是ejs
 *     app.set('views', '模板存放的文件夹的路径') 告诉node,所有的模板存放在哪里
 *  3. 创建views文件夹,在这个文件夹中创建模板  xxx.ejs (可以写html,也可以写ejs语法)
 *      <% js代码 %> 这样只会执行js,但是页面上不显示
 *      <%= js代码 %> 会执行js,并且会将结果,展示在页面上
 *      <%- js代码 %> 会执行js,会将结果展示在页面上,并且可以直接解析html格式的字符串 (不常用,因为不安全)
 *
 *  4. res.render('模板名称', 数据) 数据是对象形式
 *
 *
 *  cookie:
 *  http协议是无状态的. 如果服务器想知道是谁访问,可以使用cookie实现
 *  cookie其实是浏览器的一个存储空间, 但是很多人都喜欢把存储在cookie里面的数据直接称为cookie
 *  cookie的执行逻辑:
 *  1. 浏览器第一次访问服务器, 服务器会返回一些数据,让浏览器存储在cookie中(通过响应头set-cookie)
 *  2. 浏览器接收到响应之后,将数据存储到cookie中
 *  3. 第二次浏览器给服务器发送请求的时候,先去cookie中检查是否有数据,如果有,就直接将cookie中的数据,上传给服务器(通过请求头cookie)
 *  4. 后面的所有请求,只要有cookie,都会自动上传
 *
 *  注意: cookie中存储数据,是按照域名区分开的.如果一个数据存储在localhost:5000这个域名下面,那么只有再次请求这个域名的时候,才会将cookie中的数据上传给服务器.如果请求的是其他的域名,就不上传
 *
 *  node中操作cookie
 *  增加: res.cookie('键','值', {maxAge: 毫秒}) maxAge表示cookie的有效期
 *  修改: res.cookie('同样的键', '新值', {maxAge: 实践}) 实际就是覆盖
 *  删除: res.cookie('同样的键', '', {maxAge: 0})/ res.clearCookie('键')
 *  查找: 默认使用req.get('cookie') 但是如果使用了cookieparser这个第三方包,就可以从req.cookies中直接获取
 *
 *
 *
 *
 */
