import React from 'react';
import "./style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SinglePost from '../pages/SinglePost';


const SinglePostCard = ({item}) => {
    const [getId, setId] = useState()

    function goToSinglePost(){
        setId(item.id)
        localStorage.setItem("id",item.id)
    }

    
  return (
      <div className="container">

        <div className='single-card' >
            <h2>{item.id}</h2>
            <img src={item.image} alt="image" />
            <h1>Price: {item.price}</h1>
            <h1>{item.description}</h1>
            
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
            <button type='submit' onClick={(e) => {
                e.preventDefault()
                fetch("http://localhost:8080/v1/products/del", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({id: item.id})
                })
            }} >Edit</button>
            
            
        </div>
        <div className="edit-form">
            <h1>Edit product information</h1>
            <input placeholder='price' />
            <input placeholder='description' />
            <div>
                <button>Edit</button>
            </div>
        </div>
      </div>


  )
  
  
  
  
};

export default SinglePostCard;
