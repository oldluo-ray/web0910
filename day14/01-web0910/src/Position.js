// 写一个自定义hooks
import React, { useState, useEffect } from 'react'
export default function usePostion() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', moveHandle)
    return () => {
      window.removeEventListener('mousemove', moveHandle)
    }
  }, [])

  function moveHandle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}
