import { useEffect, useState } from "react";
import React from 'react';
import { Navigate, useLocation, Redirect } from "react-router-dom";

const Home = () => {
    const [getData,setData] = useState()
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
    <div>
        {!getData && <h1>Loading...</h1> }
        {getData && <h1>{getData}</h1> }
    </div>
  )

};

export default Home;
