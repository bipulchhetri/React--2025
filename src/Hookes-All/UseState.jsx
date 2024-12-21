// import React, { useState } from 'react'

// const UseState=()=>{
//     // ******* Counter app example •••••
//     const [Count,setCount]=useState(0)
//     const increment=()=> setCount(Count<10 ? Count+1: Count);
//     const Decrement=()=> setCount(Count>0 ? Count-1 :0);
//     return(

//         <>
//          <div>{Count}</div>
//          <button onClick={increment} >Increment</button>
//          <button onClick={Decrement} >Decrement</button>
//         </>
//     )
// }
// export default UseState;

// ••••• form using •••USESTATE•••
import { useState } from "react";
const UseState = () => {      
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const handlesubmit=(e)=>{
        e.preventDefault();

        alert(`submitted ${name }  and ${email}`)
    }
  return (
    <>
      <form onSubmit={handlesubmit}>

      <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
 <button type="submit" >Submit</button>
      </form>

      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </>

  );
};
export default UseState;
