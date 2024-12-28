import React from "react";
const user = [{ name: "bipul", age: "22" },
    {name:'hsk',
        age:"22"
    }
];
const usercount=user.length;
const DerivedS = () => {
  return <div>
    {user.map((user,index)=>(
        <div key={index}>
            <h2>{user.name}</h2>
<h1>{usercount}</h1>
        </div>
    ))}
  </div>;
};

export default DerivedS;
