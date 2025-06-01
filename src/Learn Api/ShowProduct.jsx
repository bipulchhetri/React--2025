import React from 'react';

const ShowProduct = ({ products }) => {
  if (!products.length) return <p>No products to show yet.</p>;

  return (
    <div>
      <h2>All Products:</h2>
      {products.map((product, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          {product.image && (
            <img src={product.image} alt={product.title} width="100" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
