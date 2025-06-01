import React, { useEffect } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
  useEffect(() => {
    const product = {
      title: 'New Product with Image',
      price: 29.99,
      image: 'https://via.placeholder.com/150'
    };

    axios.post('https://fakestoreapi.com/products', product)
      .then(response => {
        console.log('Product created:', response.data);
        if (onProductAdded) {
          onProductAdded(response.data); // ✅ Send product to parent
        }
      })
      .catch(error => {
        console.error('Error creating product:', error);
      });
  }, [onProductAdded]);

  return <h2>Adding product with image...</h2>;
};

export default AddProduct;
