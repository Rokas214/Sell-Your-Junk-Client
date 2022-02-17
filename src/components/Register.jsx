import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./style.css"
import "../index.css"


const Register = () => {

    const [userInputs, setUserInputs] = useState()
    const navigate = useNavigate()

    function navigateTo(){
        navigate("/")
    }


  return (
    <div>
        <Link className='link' to='/'>
                    Login
                </Link>
                <Link className='link' to='/register'>
                    Register
        </Link>
        
        <div className='login-form'>
            <h1>Register</h1>
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
                .then(data => console.log(data))
            })} >
                <input type="email" onChange={((e) => setUserInputs({...userInputs, email: e.target.value}))} placeholder='email'  />
                <input type="password" onChange={((e) => setUserInputs({...userInputs, password: e.target.value}))}  placeholder='password'  />
                <button type='submit' >Submit</button>
                <h6>
                    Have accaunt already? 
                    <span onClick={navigateTo} style={{cursor: "pointer", color: "red", marginLeft: "5px"}} >Click Here</span> 
                </h6>
                
            </form>
        </div>
    </div>
)
};

export default Register;
