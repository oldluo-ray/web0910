import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    console.log(this.props.location.state)
    return <h5>detail的内容~~~{this.props.match.params.id}</h5>
  }
}


/***
 * 
 * / -> /home -> /home/message --> /home/message/1 --> /home/message/4
 * 
 * / -> /home -> /home/message --> /home/message/5 
 * 
 * 
 * 
 * 
 * 
 */
