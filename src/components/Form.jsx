import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import {Home} from "../pages/home"


const Form = () => {

    const [userInputs, setUserInputs] = useState()
    const authContext = useContext(AuthContext)

    console.log(authContext.token)


  return (
    <div>
        <form onSubmit={((e) => {
            e.preventDefault()
            
                fetch('http://localhost:8080/v1/auth/login',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInputs)
            })
            .then(res => res.json())
            .then(data => {
                if(!data.token){
                    return alert("error")
                }else{
                    authContext.setToken(data.token)
                    alert("success")
                }
            })
        })} >
            <input type="email" onChange={((e) => setUserInputs({...userInputs, email: e.target.value}))} placeholder='email'  />
            <input type="password" onChange={((e) => setUserInputs({...userInputs, password: e.target.value}))}  placeholder='password'  />
            <button type='submit' >Submit</button>
            <button  >Home</button>
            
        </form>
    </div>
)
};

export default Form;
