import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../components/style.css"
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
                
                    fetch('http://localhost:8080/v1/auth/register',{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userInputs)
                })
                .then(res => res.json())
                .then(data => console.log(data.err.details[0].massage))
                .catch(err => alert(err))
            })} >
                <input type="email" onChange={((e) => setUserInputs({...userInputs, email: e.target.value}))} placeholder='Email'  />
                <input type="password" onChange={((e) => setUserInputs({...userInputs, passwordOne: e.target.value}))} placeholder='Password'  />
                <input type="password" onChange={((e) => setUserInputs({...userInputs, passwordTwo: e.target.value}))}  placeholder='Repeat Password'  />
                <input type="text" onChange={((e) => setUserInputs({...userInputs, username: e.target.value}))}  placeholder='Username'  />
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
