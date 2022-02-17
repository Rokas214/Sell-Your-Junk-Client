import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import SingOut from '../components/SingOut';
import "../components/style.css"

const Products = () => {

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
        
        
  return <div className='cardComp' >
     
        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to='/add'>Add Product</Link>
        <div className='singout' >
            <SingOut />
        </div>      
       

      {!getData && <h1>Loading...</h1> }
    {getData && getData.map(item => <ProductCard item={item} key={item.id} /> )}
    {console.log(getData)}

  </div>;
};

export default Products;