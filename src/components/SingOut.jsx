import React, { useState } from 'react'
import "../../src/index.css"
import "./style.css"
import { useNavigate } from 'react-router-dom'
import Notification from './Notification'


const SingOut = ({setNotification}) => {
    const navigate = useNavigate()
    
    
    

    function singOut(){
        localStorage.removeItem("token")
        setNotification(true)
        setTimeout(() => {navigate("/")}, 1500)
        

    }

  return (
      <div  >
          <button onClick={singOut} >Sing Out</button>    
      </div>
  )
}

export default SingOut