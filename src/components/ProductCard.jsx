import React from 'react';
import "./style.css"
import { useState } from 'react';

const ProductCard = ({item}) => {


  return <div className='card' >
      <h2>{item.id}</h2>
      <h1>Price: {item.price}</h1>
      <button type='submit' onClick={(e) => {
          e.preventDefault()
          fetch("http://localhost:8080/v1/products/del", {
              method: "POST",
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify({id: item.id})
          })
      }} >Delete</button>
      
  </div>;
};

export default ProductCard;
