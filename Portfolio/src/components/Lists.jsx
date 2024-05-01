import React from 'react'

function Lists({array=[], className}) {

  return (
    <ul className={className}>
        {array.map((item,idx)=>{
            return(
            <li key={idx}>{item}</li>
            )
        })}
    </ul>
  )
}

export default Lists