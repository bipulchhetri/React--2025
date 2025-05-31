import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProductList.css'; // <-- Import CSS here

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log("error found", error);
      });
  }, []);

  return (
    <div className="product-container">
      <h1>All Products</h1>
      <div className="product-grid">
        {product.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
