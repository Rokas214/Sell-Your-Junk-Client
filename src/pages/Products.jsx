import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

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
      {!getData && <h1>Loading...</h1> }
    {getData && getData.map(item => <ProductCard item={item} key={item.id} /> )}
    {console.log(getData)}

  </div>;
};

export default Products;