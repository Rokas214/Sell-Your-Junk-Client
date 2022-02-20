import React from 'react';
import "./style.css"
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import SinglePost from '../pages/SinglePost';


const SinglePostCard = ({item}) => {
    const [getId, setId] = useState()
    const [getInputs, setInputs] = useState()
    const [notification, setNotification] = useState(false)

    function goToSinglePost(){
        setId(item.id)
        localStorage.setItem("id",item.id)
    }
   
  return (
      <div className="container">
        <div className='single-card' >
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
        </div>
        <div className="edit-form">
            <h1>Edit product information</h1>
            <input onChange={((e) => setInputs({...getInputs, price: e.target.value}))} placeholder='price' />
            <input onChange={((e) => setInputs({...getInputs, description: e.target.value}))} placeholder='description' />
            <div>
                <button onClick={(e) => {
                e.preventDefault()
                fetch("http://localhost:8080/v1/add/update", {
                    method: "POST",
                    headers: {
                        id: localStorage.getItem("id"),
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(getInputs)
                })
                .then(res => res.json())
                .then(data => {
                    alert("Successfully changed product ")
                    window.location.reload(true)
                })
                }}>Edit</button>
            </div>
        </div>
    </div>
  )
};

export default SinglePostCard;
