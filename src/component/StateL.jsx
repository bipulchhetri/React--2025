import React, { useState } from 'react'
import './State.css'
const StateL = () => {
  //   const [text,setText]=useState('');
  //  const handleclick=(event)=>{
  //   setText(event.target.value)
  //  }
  const [count,setCount]=useState(0);
  const handleClick =()=>{
setCount (count+1);
  }
  const handleClickDe=()=>{
  setCount(count > 0 ? count - 1 : 0)

  }
  const Reset=()=>{
    setCount(0)
  }
  return (
    <>
    {/* <input type="text" value={text} onChange={handleclick} placeholder='Type something' />
    <p>Your Text- {text}</p> */}
    <p>{count}</p>
    <button onClick={handleClick}> Increment</button>
    <button onClick={handleClickDe}> Decrement</button>
    <button onClick={Reset}>Reset</button>

    </>
  )
}

export default StateL;