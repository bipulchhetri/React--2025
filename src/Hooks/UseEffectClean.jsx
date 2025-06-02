import React, { useEffect, useState } from 'react'

const UseEffectClean = () => {
    const [view,setviews]=useState(0);
    useEffect(()=>{
       const timer= setInterval(()=>{
            setviews((prev)=>prev+1);
        },1000);
       return()=> clearInterval(timer); //clean up function in useEffect
    },[]);
   
  return (
   <>
    <div>My Youtube RealTime Views</div>
    <p>Views: {view}</p>
    </>
  )
}

export default UseEffectClean