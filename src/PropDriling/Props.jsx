import React from 'react'

const Props = () => {
  return (
  <>
    <div>I am parent</div>
    <Child data="React js "/></>
  )
}

export default Props


const Child=(props)=>{
    return(
    <>
        <h2>I am child component</h2>
       <GrandChild data={props.data}/>
    </>
    )
}

const GrandChild=(props)=>{
    return (
        <>
        <h2>I love {props.data}</h2>
        </>
    )
}