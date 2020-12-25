import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
  Toast
} from 'antd-mobile'
import { createForm } from 'rc-form'

import { sendCode } from '../../../api/login'
import { verifyCode } from '../../../api/register'
import './index.css'
import msg from './msg.png'
class RegisterCode extends Component {
  state = {
    // 倒计时的时间
    downcount: 5,
    isDisabled: true
  }
  componentDidMount() {
    // 直接给后台发送请求,让后台给用户发送验证码
    // 从本地缓存中获取电话号
    this.sendCodeFn()
  }
  //封装发送验证码的函数
  sendCodeFn = async () => {
    const phone = localStorage.getItem('phone')
    const res = await sendCode(phone)
    if (res.data.success) {
      Toast.success('验证码发送成功', 1)

      //倒计时
      this.timeid = setInterval(() => {
        if (this.state.downcount === 1) {
          clearInterval(this.timeid)
          this.setState({
            downcount: 5
          })
          return
        }
        this.setState({
          downcount: this.state.downcount - 1
        })
      }, 1000)
    }
  }

  // 发送验证码的函数
  sendVerifyCode = () => {
    if (this.state.downcount === 5) {
      //发送请求,发送验验证码
      // console.log(1111111)
      this.sendCodeFn()
    }
  }

  // 校验验证码
  validator = (rules, value, cb) => {
    // console.log(rules)
    // console.log(value)
    // 判断用户输入的内容是否是手机号
    if (/^\d{6}$/.test(value)) {
      //是手机号
      // console.log('是手机号')
      this.setState({
        isDisabled: false
      })
    } else {
      //不是手机号
      this.setState({
        isDisabled: true
      })
    }
  }

  // 发送请求验证验证码是否正确
  handleVerifyCode = async () => {
    // phone,code
    const phone = localStorage.getItem('phone')
    // 通过rc-form的getFieldValue('字段名')获取表单的值
    const code = this.props.form.getFieldValue('code')

    // console.log(phone, code)

    const res = await verifyCode(phone, code)
    // console.log(res)
    if (res.data.success) {
      //跳转到注册密码页面.输入密码
      this.props.history.replace('/register/password')
    }
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => {}}
        >
          硅谷注册
        </NavBar>
        <WhiteSpace size='lg'></WhiteSpace>

        <WingBlank size='lg'>
          <div className='img'>
            <img src={msg} alt='' />
          </div>
          <WhiteSpace size='lg'></WhiteSpace>
          <WingBlank size='lg'>
            <div>
              我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
            </div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div className='code'>
            <InputItem
              {...getFieldProps('code', {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })}
              clear
              placeholder='请输入手机验证码'
            ></InputItem>
            <button
              className={
                this.state.downcount === 5 ? 'code-btn active' : 'code-btn'
              }
              onClick={this.sendVerifyCode}
            >
              {this.state.downcount === 5
                ? '获取验证码'
                : `重新发送(${this.state.downcount}s)`}
            </button>
          </div>
          <WingBlank size='lg'>
            <Button
              className='code-next'
              type='warning'
              disabled={this.state.isDisabled}
              onClick={this.handleVerifyCode}
            >
              下一步
            </Button>
          </WingBlank>
          <WingBlank size='lg'>
            遇到问题了?
            <a href=''>请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(RegisterCode)
