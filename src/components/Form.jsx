import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import "./style.css"


const Form = () => {

    const [userInputs, setUserInputs] = useState()
    const authContext = useContext(AuthContext)

    


  return (
    <div className='login-form' >
        <h1>Login</h1>
        <form className='form' onSubmit={((e) => {
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
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("email", userInputs.email)
                    
                    
                }
            })
        })} >
            <input type="Email" onChange={((e) => setUserInputs({...userInputs, email: e.target.value}))} placeholder='email'  />
            <input type="Password" onChange={((e) => setUserInputs({...userInputs, password: e.target.value}))}  placeholder='password'  />
            <button type='submit' >Submit</button>
            
        </form>
    </div>
)
};

export default Form;
