import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'
import usePosition from '../position'


export default function Cat() {
  const {x, y} = usePosition()
  return (
    <div>
      <img
        src={CatUrl}
        alt=''
        style={{ position: 'absolute', left: x, top: y }}
      />
    </div>
  )
}
