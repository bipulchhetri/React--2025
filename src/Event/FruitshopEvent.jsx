import React from 'react'

const FruitshopEvent = () => {
    const handleclick=(user)=>
    {
        alert(`hy ${user}`)
    }
  return (

<>

<Welcome 
onClick={()=> handleclick("Bipul")}
/>
</>
)
}

export default FruitshopEvent

const Welcome=(props)=>{
    return (
        <button onClick={props.onClick}>Clcik me </button>
    )
}