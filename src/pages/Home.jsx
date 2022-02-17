import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import SingOut from "../components/SingOut";
import "../components/style.css"
import Notification from "../components/Notification";

const Home = () => {

    const [getData,setData] = useState()
    const [notification, setNotification] = useState(false)
    const location = useLocation()
    

    useEffect(() => {
        fetch("http://localhost:8080/v1/content",{
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res => res.json())
            .then(data => setData(data.msg)
            )
            .catch(err => alert("error"))
    },[])
  return (
    <div className="page-width" >
        <div>
            {notification && <Notification>Successfully logged out</Notification> }
        </div>

        <div className='nav' >

        <div className='links' >
            <Link className='link' to='/add'>Add Product</Link>
            <Link className='link' to='/products'>All Products</Link>
        </div>
        <div className='singout' >
            <SingOut setNotification={setNotification} />
        </div>
        </div>

        {!getData && <h1>Loading...</h1> }
        {getData && <h1>{getData}</h1> }
    </div>
  )

};

export default Home;
