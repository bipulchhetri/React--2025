import React, { useEffect, useState } from 'react'
import "../index.css"
const UseRef = () => {
    const [date,setDate]=useState(0)
    // const [count,setcount]=useState(0)
    
// useEffect(()=>{
//     console.log("count value:", count);
// },[count])

useEffect (()=>{
    setInterval(()=>{
        const updatedDate=new Date();
    setDate(updatedDate.toLocaleTimeString());
    },1000)
    
},[])

  return (
    <div>
        {/* <h1>UseEffect Hooks</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setcount(count+1)}>Increment</button> */}
        <div className='date'>Time: {date}</div>
    </div>
  )
}

export default UseRef