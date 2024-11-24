// import coursedata from "../api/coursedata.json";
// import React from "react";
// const Course=()=>{
// //   const title="Web seris ";

// //  const  age =18;
// //   function button()
// //   {
// // const btn="Watch Now";
// // return btn;
// //   }
//     return (
//   //     <div>
//   //       <h1>My React JS Road Map</h1>
//   // <img src="" alt="" />
//   // <h1>{title}</h1>
//   // <h2>{name}</h2>
//   // <h3>{rating}</h3>
//   // <button>{age>=18 ?"Watch Now" : "NO NO"}</button>

//   //     </div>
// <div>


//  <h2>{coursedata[0].name}</h2>
// <img src={coursedata[0].img} alt="" /> 

// </div> 
 
//     )
//   }
//   export default Course;

import React from 'react'
import coursedata from "../api/coursedata.json";
const Course = () => {
  return (
 <ul>
  {coursedata.map((curelm)=>{
  return(
<ul>
  <li>
    <h2>{curelm.name}</h2>
  </li>
</ul>
    
 ) })}
  
 </ul>
  )
}

export default Course