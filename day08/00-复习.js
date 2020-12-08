/**
 *  1. session 是服务器端存储数据的容器. 一般和cookie配合使用
 *
 *  浏览器第一次给服务器发送请求,服务器开启了session. 会将浏览器传过来的数据,存储到session中. 存储的那块空间有一个对应的sessionid. 服务器会将这个sessionid,响应给浏览器,让浏览器存储在cookie中. 浏览器第二次给服务器发送请求,会自动将浏览器cookie中存储的数据,发送给服务器,服务器通过这个sessionid, session中查找数据
 *
 *  总结:cookie 是浏览器端存储数据的容器. cookie也受同源策略的限制. 存储有大小限制,一般一条数据,不超过4kb. 一般不超过50条
 *       session 是服务器存储数据的容器. 理论上没有大小限制
 *
 *
 *  2. 在浏览器中发送请求的方式:
 *      浏览器的地址栏输入url,按下回车  get请求
 *      <form action="url"></form> 可以发get/post. 同步的,并且页面会跳转
 *      <img src="" alt=""/>
 *      <link rel="stylesheet" href=""/>
 *      <a href=""></a>
 *      <script></script>  这四个标签,都是只能发送get请求
 *
 *      ajax 是前端发送异步请求的方式
 *      1. 异步发送请求,不会阻塞
 *      2. 不会页面跳转,可以局部更新
 *      3. 任何方式的请求都可以发送 get/post
 *
 *
 *      原生的ajax请求
 *      1. 创建xhr对象  const xhr = new XMLHttpRequest()
 *      2. 设置请求行   xhr.open('请求方式', 'url')
 *      3. 设置请求头   xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
 *      4. 设置请求体并且发送请求  xhr.send('键=值&键=值')
 *
 *      获取响应:
 *      xhr.onreadystatechange = function(){
 *
 *        // xhr.readystate的值为4,表示响应完成
 *        if(xhr.readystate === 4){
 *              // 响应完成,不代表一定是成功的.判断是否成功,使用状态码判断
 *              if(xhr.status === 200){
 *
 *
 *                  //获取响应体, 一定是一个字符串
 *                  xhr.responseText
 *
 *
 *                  获取响应头
 *                  xhr.getAllResponseHeaders()
 *                  xhr.getResponseHeader('键')
 *
 *              }
 *
 *
 *        }
 *
 *      }
 *
 *
 *
 *
 *    jq中封装了ajax请求
 *
 *      $.ajax({
 *          url: '' 请求的路径
 *          type: '' 请求方式 默认是get
 *          data: {}  要上传的数据
 *          timeout: 1000 超时时间
 *          dataType: 'json/jsonp' 如果值是json,会自动将后台返回的json格式的字符串,转成对象. 如果是jsonp,jq底层会帮助我们实现跨域
 *          beforeSend:()=>{} 在请求发送之前触发.如果这个回调中返回true,继续发送请求,如果返回false,中止请求
 *          success:(data)=>{} 请求成功回调的函数 data是返回的数据
 *          error: () => {} 请求失败回调的函数
 *          complete: () => {} 请求完成的回调函数
 *
 *      })
 *
 *
 *
 *    同源策略: 浏览器中的一个安全策略
 *    作用: 当数据响应给浏览器之后,浏览器会检查请求的协议,域名,端口号和当前页面的协议,域名,端口号,是否完全一致.如果一致,浏览器则认为同源,将数据交给js. 如果不同源,则认为数据不安全,会将数据拦截下来
 *
 *    但是在实际开发中,经常需要给不同源的地址发送请求. 所以要解决这个问题
 *    跨域: 给不同源的地址发送请求
 *    解决跨域问题:
 *      1. jsonp  没有兼容性问题, 只能发get请求
 *      2. cors  有兼容问题, 不限制请求方式
 *      注意: 以上两种方式都需要服务器配合
 *
 *
 *    jsonp原理:
 *      利用script标签,不受同源策略的限制,去发送请求. 在全局声明一个函数,函数写一个形参,接收数据. 然后将函数名通过查询字符串的形式callback=函数名上传给服务器. 服务器先获取这个函数名,返回一个函数调用的字符串.要响应的数据,就拼接在函数调用的实参的位置
 *
 */
