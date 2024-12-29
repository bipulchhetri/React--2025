import React, { useState } from 'react'

const Registration = () => {
    const [data,setdata]=useState({
        name:" ",
        lastname:"",
    }
       
    );
    const handlechange=(e)=>{
        const {name,value}=e.target;
        setdata({
            ...data,[name]:value,
        })
    }

    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (
    <div>
        <h2>REGISTRATION FORM </h2>
        <form onSubmit={handlesubmit}>
<div>
    <label htmlFor="">Name:</label>
    <input type="text" name='name' id='name' onChange={handlechange} value={data.name}/>
</div>
<div>
    <label htmlFor="">Last Name:</label>
    <input type="text" name='lastname' id='lastname' onChange={handlechange} value={data.lastname}/>
</div>
<button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Registration