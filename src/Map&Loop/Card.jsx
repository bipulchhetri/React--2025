import React from 'react';
import '../index.css'
// Card component that accepts props
const Card = ({ title, description }) => {
  return (
 <>
   <h1>{title}</h1>
   <p>{description}</p></>
  );
};

// PropTypes for type checking (optional but useful)


export default Card;
