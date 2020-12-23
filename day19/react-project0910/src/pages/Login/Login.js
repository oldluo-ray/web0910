import React, { Component } from 'react'

// 使用antd-mobile中的组件
import { NavBar, Icon, InputItem, WingBlank, Button } from 'antd-mobile'

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

          <div className='inp-code'>
            <InputItem clear placeholder='请输入手机验证码'></InputItem>
            <button>获取验证码</button>
          </div>

          <WingBlank>
            <Button type='warning' disabled className='login-btn'>
              登录
            </Button>
          </WingBlank>

          <WingBlank>
            <div className='login-link'>
              <a href='#'>账号密码登录</a>
              <a href='#'>手机快速注册</a>
            </div>
          </WingBlank>
          <WingBlank>
            <div className='login-line'>
              <div className='line'></div>
              <div>其他登录方式</div>
              <div className='line'></div>
            </div>
          </WingBlank>
          <div className='login-oauth'>
            <div className='iconfont icon-github'></div>
            <div className='iconfont icon-wechat'></div>
            <div className='iconfont icon-qq'></div>
          </div>
          <WingBlank>
            <div className='login-copyright'>
              <span>
                未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
              </span>
              <a href=''>硅谷隐私政策</a>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
