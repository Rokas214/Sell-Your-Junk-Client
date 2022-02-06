import { useEffect, useContext } from "react";
import React from 'react';
import { AuthContext } from '../context/Auth'

const Home = () => {
    const authContext = useContext(AuthContext)
    

    useEffect(() => {
        fetch("http://localhost:8080/v1/content",{
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    },[])
  return (
    <div>
        
    </div>
  )

};

export default Home;
