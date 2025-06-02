import React, { useState } from "react";
import "../index.css";  // Import the updated CSS

function Registration() {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const {name,value}=e.target;
    setData({
        ...data,[name]:value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>React Registration Form</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
            />
          </div>
               <div className="form-group">
            <label htmlFor="name" className="form-label">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Phone Number:</label>
            <input
              type="text"
              name="number"
              id="number"
              value={data.number}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <h2>{data.name}</h2> 
        <h2>{data.email}</h2>
      </div>
    </div>
  );
}

export default Registration;



