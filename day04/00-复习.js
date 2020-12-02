/**
 *  1. mongoose 一个第三方的库, 可以更加安全,高效的操作mongodb数据库
 *
 *  使用:
 *      1.1 连接: mongoose.connect('mongodb://localhost:27017/数据库名')
 *                mongoose.connection.once('open',()=>{
 *                })
 *      1.2 创建约束以及创建model对象
 *          const Schema = mongoose.Schema
 *          const xxxSchema = new Schema({
 *
 *              字段: {
 *                  type: 数据类型,
 *                  required: 必填项
 *                  unique: 唯一的
 *                  default: 默认值
 *               }
 *
 *          })
 *          const xxxModel = mongoose.model('集合名',xxxSchema)
 *
 *      1.3 CRUD操作:
 *
 *          c
 *          xxxModel.create({
 *          })
 *          r
 *          xxxModel.find(查询条件, 投影,cb) 找到所有符合条件的数据,返回一个数组,如果没有符合条件的数据,返回一个空的数组
 *          xxxModel.findOne(查询条件, 投影,cb) 返回所有符合条件的第一个. 返回一个对象,如果没有返回null
 *          u
 *          xxxModel.updateOne(修改条件,要修改的内容, cb) 修改所有符合条件的第一条
 *          xxxModel.updateMany(修改条件,要修改的内容, cb) 修改所有符合条件的数据
 *
 *          d
 *          xxxmodel.deleteOne(删除条件) 删除所有符合条件中的第一个
 *          xxxmodel.deleteMany(删除条件) 删除所有符合条件的数据
 *
 *
 * 
 *  2. node原生搭建服务 
 *  
 *   2.1 要使用node中提供的系统包http const http = require('http')
 *   2.2 创建服务对象  http.createServer((request, response)=>{
 *                          2.2.1 客户端发过来的所有请求,都会触发这个回调  
 *                          2.2.2 request是客户端发过来的所有请求的对象
 *                                response是响应对象,用于给客户端响应数据
 *                          2.2.3 如果获取通过get请求上传上来的查询字符串数据 
 *                                request.url 可以获取到路径后面的内容.然后自己进行截取 
 *                                通过querystring这个包的parse方法,对查询字符串进行解析.最终
 *                                得到一个对象
 *                          2.2.4 响应数据: response.end('响应的数据')
 *                          2.2.5 解决乱码: response.setHeader('content-type', 'text/html;charset=utf-8')
 *  
 *                    })
 * 
 *  2.3 server.listen(端口号,回调函数) 开启成功会调用这个回调,失败,也会调用,但是会传一个err对象
 * 
 * 
 * 
 * 
 *  3. 使用express搭建服务  
 * 
 *   3.1 下载,引用包   npm i express   require('express')
 *   3.2 创建应用对象  const app = express()
 *   3.3 开启服务器   app.listen(端口号, 回调)
 *
 */
