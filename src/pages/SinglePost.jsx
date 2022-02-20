import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import SinglePostCard from '../components/SinglePostCard'
import SingOut from '../components/SingOut'


const SinglePost = ({getId}) => {

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
       {getData && getData.map((item) =>   <SinglePostCard item={item} key={item.id} /> )}
    </div>
  )
}

export default SinglePost