import React, { useRef } from "react";

const UseRef = () => {
  // const username = document.getElementById("username");
  // const password = document.getElementById("password");
  
  const username = useRef(null);
  const password =  useRef(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };


  return (
    <form onSubmit={handlesubmit}>
      <input type="text" id="username" ref={username}/>
      <input type="text" id="password" ref={password} />
      <button>submit</button>
    </form>
  );
};

export default UseRef;
