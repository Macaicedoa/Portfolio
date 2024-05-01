import React from 'react'

function RedText({text='',className=''}) {
  return (
    <p className={`red-text ${className}`}>{text}</p>
  )
}

export default RedText