import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'

import { getCountryData } from '../../api/common'

import './index.css'
const Item = List.Item

export default class Country extends Component {
  state = {
    country: {}
  }
  async componentDidMount() {
    try {
      // 如果返回一个成功的promise,await下面的代码就可以正常执行.
      // 如果getCountryData这个函数执行过程中出错了,或者是返回了一个失败的promise,就可以进行到catch中
      const res = await getCountryData()
      this.setState({
        country: res.data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { country } = this.state
    const arr = Object.keys(country)
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='icon-left' />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>

        <div className='country-nav'>
          {arr.map(item => {
            return (
              <a key={item} href={`#${item}`}>
                {item}
              </a>
            )
          })}
        </div>
        <div className='country-constainer'>
          {arr.map(item => {
            const itemArr = country[item]
            return (
              <List
                id={item}
                key={item}
                renderHeader={() => item}
                className='my-list'
              >
                {itemArr.map(item => {
                  const key = Object.keys(item)[0]
                  return (
                    <Item
                      key={key}
                      extra={item[key]}
                      onClick={() => {
                        this.props.history.replace('/login', {
                          country: `+${item[key]}`
                        })
                      }}
                    >
                      {key}
                    </Item>
                  )
                })}
              </List>
            )
          })}
        </div>
      </div>
    )
  }
}
