import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  Modal,
  Toast
} from 'antd-mobile'
//做表单校验的包
import { createForm } from 'rc-form'

// 导入异步请求函数
import { verifyPhone } from '../../../api/register'

class RegisterPhone extends Component {
  state = {
    isDisabled: true
  }
  componentDidMount() {
    console.log(this.props)
    Modal.alert(
      '注册协议及隐私政策',
      <div>
        在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
      </div>,
      [
        {
          text: '不同意',
          onPress: () => {
            this.props.history.replace(this.props.location.state.from)
          }
        },
        { text: '同意', style: { backgroundColor: 'red', color: '#fff' } }
      ]
    )
  }

  // 校验input表单项的函数
  // rules就是表单项的字段名
  // value 就是表单项的值
  // cb是一个回调函数,调用表示校验通过,当前项目中不需要
  // 每一次输入的时候,这个函数会被调用
  validator = (rules, value, cb) => {
    // console.log(rules)
    // console.log(value)
    // 判断用户输入的内容是否是手机号
    if (/^1[3456789]\d{9}$/.test(value)) {
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

  // 点击下一步的事件处理函数
  handleVerifyPhone = async () => {
    // console.log('触发了')
    // 获取到用户输入的手机号,然后发送给后台,判断是否注册过
    // 问题: 在这个函数中,要获取用户输入的手机号(表单项中的内容)
    // getFieldValue这个函数可以获取到表单项中的值
    const { getFieldValue } = this.props.form
    const phone = getFieldValue('phone')
    //发送异步请求
    const res = await verifyPhone(phone)
    // console.log(res)
    //判断手机号是否存在
    if (res.data.success) {
      // 手机号不存在
      Modal.alert('', '我们将发送短信/语音验证码至:' + phone, [
        {
          text: '取消'
        },
        {
          text: '确认',
          style: { backgroundColor: 'red', color: '#fff' },
          onPress: () => {
            this.props.history.replace('/register/code')
          }
        }
      ])
    } else {
      // 手机号存在
      //提示用户,返回login页面
      Toast.info(res.data.message)

      setTimeout(() => {
        this.props.history.replace('/login')
      }, 2000)
    }
  }
  render() {
    // 因为当前组件已经被createForm生成的组件包裹了,所以可以通过props直接获取到一个form对象. 从form对象身上,可以结构一个getFieldProps函数,可以用来获取表单项的值,并且进行校验
    const { getFieldProps } = this.props.form

    // const { isDisabled } = this.state
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='icon-left' />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册
        </NavBar>
        <WingBlank>
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                {
                  validator: this.validator
                }
              ]
            })}
            clear
            placeholder='请输入手机号'
          >
            <div className='inp-left'>
              <span>+86</span>&nbsp;
              <Icon type='down'></Icon>
            </div>
          </InputItem>

          <WingBlank>
            <Button
              type='warning'
              disabled={this.state.isDisabled}
              className='login-btn'
              onClick={this.handleVerifyPhone}
            >
              下一步
            </Button>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(RegisterPhone)
