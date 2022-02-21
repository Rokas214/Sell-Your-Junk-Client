import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link,useParams } from 'react-router-dom';
import SingOut from '../components/SingOut';
import "../components/style.css"
import Notification from '../components/Notification';
const Cart = () => {

    const [getData, setData] = useState()
    const [notification, setNotification] = useState(false)
    useEffect(() => {
        fetch("http://localhost:8080/v1/cart",{
            headers:{
                email: localStorage.getItem("email"),
                id: localStorage.getItem("id"),
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
                    <Link className='link' to='/add'>Add Product</Link>
                    <Link className='link' to='/products'>My Products</Link>
                </div>
                <div className='singout' >
                    <div className='cart' >
                        <h4>Cart</h4>
                    </div>
                    <SingOut setNotification={setNotification} />
                </div> 
        </div>
        <div className='cardComp'>
            {!getData && <h1>Loading...</h1> }
            {getData && getData.map(item => <ProductCard display={"none"} link={"/viewsinglepost"} item={item} image={item.image} text={"Remove from cart"} key={item.id} /> )}
            
        </div>
        </div>
        </div>


        )
}

export default Cart