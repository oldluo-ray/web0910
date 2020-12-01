/**
 *  fs 专用来操作文件
 *  引入: require('fs')
 *  普通读取文件:  fs.readFile('文件路径'[,配置项],回调函数)
 *  流式读取文件:  fs.createReadStream('文件路径'[,配置项]) 返回一个读取流
 *  监听: 开启 rs.on('open', 回调函数)  关闭: rs.on('close',回调函数)
 *  获取读取数据: rs.on('data',(data)=>{})
 *
 *  普通写入文件: fs.writeFile('文件路径',要写入的内容[,配置项],回调函数)
 *  流式写入文件: fs.createWriteStream('文件路径'[,配置项])
 *  具体的写入的方法: ws.write('写入的数据') \
 *  写完了,应该调用: ws.end()
 *  监听: 开启 ws.on('open', 回调函数)  关闭: ws.on('close',回调函数)
 *
 *  注意: 如果流式的读写配合完成的时候,要记得,应该在流式读取完毕的时候,关闭写入流
 *
 *  pipe 是 流的方法, 返回的结果还是一个流
 *  rs.pipe(ws) 可以快速将读取流中的数据,写入到某个文件中
 *
 *
 * 数据库: 一个存储数据的仓库
 *
 * 数据库分类:
 * 关系型数据库软件  mysql
 *
 *  数据库
 *  表
 *  字段
 *
 * 非关系型数据库软件 mongodb  nosql
 *
 *  数据库
 *  集合
 *  文档 (json对象)
 *
 *
 *  指令:
 *  show dbs 展示所有数据库,但是只展示有数据的
 *  db 表示当前使用的数据库
 *  use <db> 要使用某个数据库, 如果没有会自动创建
 *  show collections 展示当前使用的数据库中,所有的集合
 *  db.dropDatabase() 删除当前数据库
 *  db.<collection>.drop() 删除当前数据中指定的集合
 *
 *  对数据库中的数据,进行CRUD
 *
 *  添加数据:
 *  db.<collection>.insert(文档) 可以插入多个,也可以插入一个
 *  db.<collection>.insertOne(文档) 只能插入一个
 *  db.<collection>.insertMany([文档,文档]) 可以插入多个
 *
 *  查找数据:
 *  db.<collection>.find(查询条件,投影)
 *  db.<collection>.find() 找到当前数据库中指定的集合下,所有的数据
 *  db.<collection>.find({age: 18}) 找到当前数据库中指定的集合下,age为18的所有数据
 *  db.<collection>.find({age: {$gte: 18}}) 找到当前数据库中指定的集合下,age为大于等于18的所有数据
 *  操作符: $lt(小于) $lte(小于等于) $gt $gte $ne(不等)
 *         $in(与) $or(或) $ne(非)
 *
 *  db.<collection>.find({age: {$in: [18,8]}}) 表示查找age是18和8的
 *  db.<collection>.find({$or: [{age: 18},{age:8}]}) 表示查找age18或8的
 *
 *  db.<collection>.find({name: /^[a-z]{2}$/}) 可以写正则,表示查找name字段的值是两位的小写字母
 *
 *  db.<collection>.find({$where: function(){
 *      return this.age = 18
 * }}) 可以写函数,表示找到age为18的所有数据
 *
 *
 *
 *  投影: 字段的值为1. 表示展示, 为0 表示不展示
 * db.<collection>.find({age:18},{age:0}) 要查找当前集合中所有age为18的数据,但是不显示age字段的数据,其他默认展示
 *
 * db.<collection>.find({age:18},{age:1}) 要查找当前集合中所有age为18的数据,但是只显示age字段的数据,其他默认不展示
 *
 *
 */
