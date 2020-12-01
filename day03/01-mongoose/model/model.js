// 指定约束,创建model对象的文件
const mongoose = require('mongoose')

// 获取Schema构造函数
const Schema = mongoose.Schema

// 创建Schema对象
const teacherSchema = new Schema({
    id: {
        type: String,
        required:true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    info: {
        type: Schema.Types.Mixed
    }
})

// 创建操作数据中的model对象
const teaModel = mongoose.model('teacher',teacherSchema)

// 导出这个model对象
module.exports = teaModel