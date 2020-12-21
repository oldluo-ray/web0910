import axios from 'axios'
import { GETUSERSOK } from './constants'

// 同步
function getUsers(data) {
  return { type: GETUSERSOK, data }
}

//异步action
export function getUsersAsync(data) {
  return dispatch => {
    // 执行异步操作
    //发送异步请求
    axios({
      url: 'http://localhost:5000/search/users',
      method: 'get',
      params: {
        data
      }
    }).then(res => {
      console.log(res)
      // 异步成功了,拿到数据了
      dispatch(getUsers(res.data.items))
    })
  }
}
