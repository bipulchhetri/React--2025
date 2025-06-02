import React, { useState } from "react";

const NewRegistration = () => {
    const [form,setForm]=useState({
        name:" ",
        email:" ",
    });
   
   
    const handleChange=(e)=>
    {
const{name,value}=e.target // destructring 
setForm({...form ,[name]:value}) // setform store all the from value that's why we used spread operator {[name]:value ** this is used to control extract same value we get}
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Form Data Submitted:", form);
    }
  return (
    <>
      <div>
        <h2></h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your number"
          value={form.name}
          name="name"
          id="name"
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Enter your email"
          value={form.email}
          name="email"
          id="email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewRegistration;
