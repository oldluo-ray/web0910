import React, { Component } from 'react'
// 引入列表项
import Item from '../Item/Item'

import './List.css'

export default class List extends Component {
  render() {
    const { list, getIdDel } = this.props
    return (
      <ul className='todo-main'>
        {list.map(item => {
          return <Item key={item.id} todo={item} getIdDel={getIdDel}></Item>
        })}
      </ul>
    )
  }
}
