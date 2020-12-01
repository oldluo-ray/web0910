// 1. 引入mongoose
const mongoose = require('mongoose')

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/web0910', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 3. 监听是否连接成功
mongoose.connection.once('open', () => {
  console.log('数据库连接成功')

  // 一定要注意: 一定要在连接数据库成功之后,去写操作数据的代码
  // 为了添加数据的时候,更加安全.需要给添加的数据,设置一些约束 使用Schema
  const Schema = mongoose.Schema
  // 定义约束
  const stu_schema = new Schema({
    name: {
      type: String,
      required: true // 必填项
    },
    id: {
      type: String,
      required: true,
      unique: true // 表示当前字段的值,必须是唯一的,不能重复
    },
    gender: {
      type: String,
      required: true,
      default: '女'
    },
    age: {
      type: Number,
      required: true
    },
    info: {
      type: Schema.Types.Mixed
    },
    date: {
      type: Date,
      default: Date.now()
    },
    hobby: [String],
    enable_flag: {
      type: String,
      default: 'Y'
    }
  })

  // 创建model对象
  const stu_model = mongoose.model('students', stu_schema)

  //创建一个文档对象(了解)
  // 仅仅就是创建了一个document对象,并没有存储到数据库中
  //   const stu_document = new stu_model({
  //     id: '55555',
  //     name: 'haha',
  //     age: 19,
  //     info: '人很帅,家里很有钱,但是没有头发',
  //     hobby: ['吃饭', '睡觉', '打豆豆']
  //   })
  // 将这个document存储进去
  //   stu_document.save()

  // 往students集合中添加一个文档(一条数据)
  // 直接创建文档,并且直接存储到集合
  // stu_model.create(
  //   {
  //     id: '444444',
  //     name: 'haha',
  //     age: 19,
  //     info: '人很帅,家里很有钱,但是没有头发',
  //     hobby: ['吃饭', '睡觉', '打豆豆']
  //   },
  //   (err, data) => {
  //     // 添加信息完毕之后会调用,
  //     //   err是错误信息
  //     //   data就是刚刚添加进去的那条文档
  //     if (err) console.log(err)
  //     else console.log(data)
  //   }
  // )

  // find() 方法查询数据,查询成功data拿到的是一个数组,数组里面存储了所有的数据(对象),
  // 如果没有查找到任何数据,返回的依然是一个数组,是一个空数组
  // stu_model.find({ id: '66666' }, (err, data) => {
  //   console.log(err)
  //   console.log('======')
  //   console.log(data)
  // })

  // stu_model.find({ age: {$gt: 18} },{name:1,_id: 0}, (err, data) => {
  //   console.log(err)
  //   console.log('======')
  //   console.log(data)
  // })
  //  stu_model.findOne({ age: {$gt: 18} },{name:1,_id: 0}, (err, data) => {
  //   console.log(err)
  //   console.log('======')
  //   console.log(data)
  // })

  // stu_model.updateOne({ name: 'zs' }, { $set: { age: 28 } }, (err, data) => {
  //   console.log('======')
  //   console.log(err)
  //   console.log('=======')
  //   console.log(data)
  // })

  // stu_model.updateMany({ name: 'zs' }, { $set: { age: 38 } }, (err, data) => {
  //   console.log('======')
  //   console.log(err)
  //   console.log('=======')
  //   console.log(data)
  // })

  // stu_model.deleteOne({ name: 'zs' }, (err, data) => {
  //   console.log('======')
  //   console.log(err)
  //   console.log('=======')
  //   console.log(data)
  // })

  stu_model.deleteMany({ name: 'haha' }, (err, data) => {
    console.log('======')
    console.log(err)
    console.log('=======')
    console.log(data)
  })
})
