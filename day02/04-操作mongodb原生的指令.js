//create
db.students.insert([{ name: 'hehe', age: 15 }, { name: 'heihei', age: 5 }]) // 可以插入一条或多条
db.students.insertOne({ name: 'houhou', age: 28 }) //只能插入一条
db.students.insertMany([{ name: 'a1', age: 15 }, { name: 'a2', age: 5 }]) //可以插入多条

//read
db.students.find() // 查询所有
db.students.find({ age: 15 }) // 查询指定条件
db.students.find({ age: 15, name: 'hehe' }) // 查询指定条件, 可以写多个条件
db.students.find({ age: { $gte: 18 } }) // 可以写操作符: 表示age大于等于18
db.students.find({ age: { $in: [15, 5] } }) //与操作符: 年龄是15和5的
db.students.find({ $or: [{ age: 15 }, { age: 5 }] }) //或操作符: 年龄是15或5的
db.students.find({ age: { $ne: 15 } }) //非操作符: 年龄不是15的
db.students.find({ name: /^[a-zA-Z]{2}$/ }) // 可以写正则
db.students.find({
  $where: function() {
    //$where操作符,可以写函数
    return this.name === 'houhou' || this.age === 18
  }
})

// 第二个参数是投影
// 如果写出来的字段值是1,那么其他的字段默认是0. 1就是展示, 0就是不展示
db.students.find({ age: 15 }, { name: 1, _id: 0 })
db.students.find({ age: 15 }, { name: 0 })
// 找到所有数据中,符合条件的第一条
db.students.findOne({ age: 15 })
