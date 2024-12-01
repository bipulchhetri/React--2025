import React, { useState } from 'react'
import './State.css'
const StateL = () => {
    const [text,setText]=useState('');
   const handleclick=(event)=>{
    setText(event.target.value)
   }
  return (
    <>
    <input type="text" value={text} onChange={handleclick} placeholder='Type something' />
    <p>Your Text- {text}</p>
    </>
  )
}

export default StateL;