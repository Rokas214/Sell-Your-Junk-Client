import React from 'react';
import "./style.css"
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewSinglePostCard = ({item}) => {
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
        </div>
    </div>
  )
};

export default ViewSinglePostCard;
