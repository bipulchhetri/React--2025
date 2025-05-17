// import React from "react";

// export const Learn = () => {
//   const age=16;
//   const name = "hello caard ";
//   const image ="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"  
//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/I/71XFFoKKZ9L._AC_UF1000,1000_QL80_.jpg"
//           alt=""
//           height="400px"
//         />
//       </div>
//       <h1>{name}</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ab!
//       </p>
//       <p>{image}</p>
//       <button>{age>=18 ? "watch now" : "not"}</button>
//       <Card />
//     </>
//     // React.createElement('h1',null,'Hello baby how are you')
//   );
// };

// const Card = () => {
//   const age=18;

//   let canwatch="no no"
//   if(age>=18) canwatch="watch now"

//   return (
//     <div>
//       <img src="" alt="" />
//       <h2>Name:Queen of Tears</h2>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, vel?
//       </p>
//       <button>{age>=18 ? "watch now" : "not"}</button>
//       <button>{canwatch}</button>
//     </div>
//   );
// };

import React from 'react'

const Learn = () => {
  const name="bippul";
  const age=24;
  return (
   <>
   <h1>{name}</h1>
   <p>{age}</p>
   </>
  )
}

export default Learn