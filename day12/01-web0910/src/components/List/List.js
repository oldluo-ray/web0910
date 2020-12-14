import React, { Component } from 'react'
// 引入列表项
import Item from '../Item/Item'

import './List.css'

export default class List extends Component {
  render() {
    return (
      <ul className='todo-main'>
        <Item></Item>
        <Item></Item>
      </ul>
    )
  }
}
