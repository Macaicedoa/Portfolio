import React from 'react'

function DarkText({text='',className=''}) {
    return (
      <p className={`dark-text ${className}`}>{text}</p>
    )
  }

export default DarkText