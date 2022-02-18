import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link,useParams } from 'react-router-dom';
import SingOut from '../components/SingOut';
import "../components/style.css"
import Notification from '../components/Notification';

const Products = () => {

    const {id} = useParams()
    const [notification, setNotification] = useState(false)
    const [getData, setData] = useState()
        useEffect(() => {
            fetch("http://localhost:8080/v1/products",{
                headers:{
                    email: localStorage.getItem("email"),
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => res.json())
            .then(data => setData(data))
        },[])
        
        
        
  return (
      <div className='page-width' >
            <div>
                {notification && <Notification>Successfully logged out</Notification> }
            </div>
        <div>
            <div className='nav' >
                <div className='links' >
                    <Link className='link' to="/products/:id" >Product with id</Link>
                    <Link className='link' to='/home'>Home</Link>
                    <Link className='link' to='/add'>Add Product</Link>
                </div>
                <div className='singout' >
                    <SingOut setNotification={setNotification} />
                </div> 
        </div>
        <div className='cardComp'>
            {!getData && <h1>Loading...</h1> }
            {getData && getData.map(item => <ProductCard item={item} image={item.image} key={item.id} /> )}
        </div>
        </div>
      </div>

  )
};

export default Products;