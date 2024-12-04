import React, { useState } from "react";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleformSubmit=(e)=>{
    e.preventDefault();
    const logindata={
        username:username,
        password:password
    };
    console.log(logindata)
  }


  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleformSubmit}>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" required value={username} onChange={(e)=>setusername(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
