import React from 'react';
import "../components/style.css"
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingOut from "../components/SingOut"
import ViewSinglePostCard from '../components/ViewSinglePostCard';




const ViewSinglePost = () => {
    const [getData, setData] = useState()
    const [notification, setNotification] = useState()

        useEffect(() => {
            fetch("http://localhost:8080/v1/singlepost",{
                headers:{
                    id: localStorage.getItem("id"),
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => res.json())
            .then(data => setData(data))
        },[])

  return (
    <div>
        <div className='nav edit-container' >
                <div className='links' >
                    <Link className='link' to='/home'>Home</Link>
                    <Link className='link' to='/products'>My Products</Link>
                </div>
                <div className='singout' >
                    <SingOut setNotification={setNotification} />
                </div> 
        </div>
       {getData && getData.map((item) =>   <ViewSinglePostCard displa={"none"} item={item} key={item.id} /> )}
    </div>
  )
}

export default ViewSinglePost