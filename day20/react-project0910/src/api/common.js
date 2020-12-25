// 获取国家地区数据
import axios from 'axios'

// 获取国家地区的函数
function getCountryData() {
  return axios({
    url: '/common/countryData'
  })
}

export { getCountryData }
