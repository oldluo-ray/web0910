import React, { Component } from 'react'

// 使用antd-mobile中的组件
import { NavBar, Icon, InputItem, WingBlank } from 'antd-mobile'

export default class Login extends Component {
  render() {
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='icon-left' />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem clear placeholder='请输入手机号'>
            <div className='inp-left'>
              <span>+86</span>&nbsp;
              <Icon type='down'></Icon>
            </div>
          </InputItem>
        </WingBlank>
      </div>
    )
  }
}
