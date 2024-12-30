import React, { useEffect, useState } from 'react'

const UseEffectChallange = () => {
    const[count,setcount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        document.title=`count:${count}`
    },[count])
useEffect(()=>{
    console.log(name)
},[name])

  return (
    <div>
        
        <h2>UseEffect Challange</h2>
        <div>Increment :{count}</div>
        <button onClick={()=> setcount(count+1)}>Count++</button>
<br />
<br />
<p>Name:{name}</p>
        <input type="text" name="name" id="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default UseEffectChallange