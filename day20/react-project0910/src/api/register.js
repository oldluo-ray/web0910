// 跟注册相关的异步请求的函数,都封装在这个文件中
import axios from 'axios'

// 验证手机号是否存在

function verifyPhone(phone) {
  //发送异步请求
  // 注意: 默认情况会跨域
  // 解决跨域的方式: 使用代理:
  // 1. package.json中增加配置量: "proxy":"http://localhost:5000"
  // 2. 发请求时,不要写绝对路径了
  return axios({
    url: '/regist/verify_phone',
    method: 'post',
    data: {
      phone
    }
  })
}
function verifyCode(phone, code) {
  //发送异步请求
  // 注意: 默认情况会跨域
  // 解决跨域的方式: 使用代理:
  // 1. package.json中增加配置量: "proxy":"http://localhost:5000"
  // 2. 发请求时,不要写绝对路径了
  return axios({
    url: '/regist/verify_code',
    method: 'post',
    data: {
      phone,
      code
    }
  })
}

export { verifyPhone, verifyCode }
