import React, { Component } from 'react'

// 使用antd-mobile中的组件
import { NavBar, Icon, InputItem, WingBlank, Button } from 'antd-mobile'

export default class Login extends Component {
  state = {
    country: '+86'
  }
  componentDidMount() {
    if (this.props.location.state) {
      const country = this.props.location.state.country
      this.setState({
        country
      })
    }
  }

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
              <span
                onClick={() => {
                  this.props.history.replace('/country')
                }}
              >
                {this.state.country}
              </span>
              &nbsp;
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
              <a
                href='#'
                onClick={e => {
                  this.props.history.replace('/register/phone', {
                    from: '/login'
                  })
                  e.preventDefault()
                }}
              >
                手机快速注册
              </a>
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
            <div
              className='iconfont icon-github'
              onClick={() => {
                window.location.href =
                  'https://github.com/login/oauth/authorize?client_id=c1e7c49c50d1f3b52105'
              }}
            ></div>
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
