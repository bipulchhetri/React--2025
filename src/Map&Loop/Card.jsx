import React from 'react';
import '../index.css'
// Card component that accepts props
const Card = ({ title, description,img,button }) => {
  return (
 <>
  <div className="card">
  <div className="header">
   <h1>{title}</h1>
   </div>
   <div className="image">
   <img src={img} alt="" width="40%"/>
  
   </div>
   <div className="para">
   <p>{description}</p>
   </div>
   <button>{button}</button>
  </div>
   </>
  );
};

// PropTypes for type checking (optional but useful)


export default Card;
