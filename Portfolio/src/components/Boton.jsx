import React from 'react'

function Boton({text,className,callback,isDisabled=false,type}) {
  return (
    <button type={type} className={className}onClick={callback} disabled={isDisabled}>{text}</button>
  )
}

export default Boton