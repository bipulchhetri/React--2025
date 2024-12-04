// import React, { useState } from 'react'

// const Registration = () => {
//     const [first,setfirst]=useState("");
//     const [last,setlast]=useState("");
//     const [email,setemail]=useState("");
// const handleOnchange=(e)=>{
//     const {name,value}=e.target;

//     switch(name)
//     {
//         case"first":
//         setfirst(value);
//         break;
//         case"last":
//         setlast(value);
//         break; 
//         case"email":
//         setemail(value);
//         break;
//     }
 
// }
// const handlesubmit=(event)=>{
//     event.preventDefault;
//     const formdata={
//         first,last,email
//     }
// }
//   return (
//     <>
//     <form onSubmit={handlesubmit}>
//         <div className="container">
// <label htmlFor="name">
//     <input type="text" name="first" id="" placeholder='first name'  onChange={handleOnchange} value={first}/>
// </label>
// <label htmlFor="name">
//     <input type="text" name="last" id="" placeholder='last name' onChange={handleOnchange} value={last}/>
// </label>
// <label htmlFor="name">
//     <input type="email" name="email" id="" placeholder='Enter your email' onChange={handleOnchange} value={email}/>
//     <button onSubmit={handlesubmit} >onSubmit</button>
// </label>

//         </div>
//     </form>
    
    
//     </>
//   )
// }

// export default Registration

import React from 'react'
import { useState } from 'react';
const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        alert("Registration successful!");
        setFormData({ name: "", number: "" });  // Clear form after submit
      };
  return (
    <div className="form-container">
      <h2>LOGIN FORM </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>

  )
}

export default Registration