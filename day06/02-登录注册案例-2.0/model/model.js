const mongoose = require('mongoose')
// 定义约束
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  psw: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: 'Y'
  }
})

//创建model对象
const userModel = mongoose.model('users', userSchema)

module.exports = userModel
