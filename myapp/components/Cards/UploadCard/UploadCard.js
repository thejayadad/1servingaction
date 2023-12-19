'use client'
import React from 'react';

const ProductCard = ({ product }) => {
  const { imageUrl, title, desc} = product;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <img
        src={imageUrl}
        alt='Product Preview'
        style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }}
      />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProductCard;
