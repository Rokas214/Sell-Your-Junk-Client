import React from 'react'
import "../../src/index.css"
import "./style.css"
import { useNavigate } from 'react-router-dom'

const SingOut = () => {
    const navigate = useNavigate()
    

    function singOut(){
        localStorage.removeItem("token")

        navigate("/")

    }

  return (
      <div  >
          <button onClick={singOut} >Sing Out</button>    
      </div>
  )
}

export default SingOut