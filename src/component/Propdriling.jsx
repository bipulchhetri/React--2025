import React from 'react'

const Propdriling = () => {
    const message="hello baby how are you"
  return <Parent message={message}/>
}

const Parent=({message})=>{
    return <Child message={message}/>
}
const Child=({message})=>{
    return <h1>{message}</h1>
}

export default Propdriling