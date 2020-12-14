import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type='checkbox' />
          <span>xxxxx</span>
        </label>
        <button className='btn btn-danger' style={{ display: 'none' }}>
          删除
        </button>
      </li>
    )
  }
}
