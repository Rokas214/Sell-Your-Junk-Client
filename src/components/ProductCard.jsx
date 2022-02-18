import React from 'react';
import "./style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SinglePost from '../pages/SinglePost';

const ProductCard = ({item}) => {
    const [getId, setId] = useState()

    function goToSinglePost(){
        setId(item.id)
        localStorage.setItem("id",item.id)
    }

    
  return <div className='card' >
      <h2>{item.id}</h2>
      <img src={item.image} alt="image" />
      <h1>Price: {item.price}</h1>
      <h1>{item.description}</h1>
      <Link onClick={goToSinglePost} to={"/singlepost/"+ item.id}  >Go to {item.id} product</Link>
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
