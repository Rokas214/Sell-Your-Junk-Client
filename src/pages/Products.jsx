import React, { useEffect, useState } from 'react';


const Products = () => {

    const [getData, setData] = useState()
        useEffect(() => {
            fetch("http://localhost:8080/v1/products",{
                headers:{
                    email: localStorage.getItem("email")
                }
            })
            .then(res => res.json())
            .then(data => setData(data))
        },[])
        
        
  return <div>
      {!getData && <h1>Loading...</h1> }
    {getData && getData.map(item => <h1 key={item.id} >{item.price}</h1> )}
    {console.log(getData)}

  </div>;
};

export default Products;
