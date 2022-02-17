import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import "./style.css"
import "../index.css"
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Form = () => {

    const [notification, setNotification] = useState(false)

    let navigate = useNavigate();

    function navigateTo(nav){
        navigate(nav)
    }

    const [userInputs, setUserInputs] = useState()
    const authContext = useContext(AuthContext)

  return (
    <div>
        {notification && <div className='notification' >Successfully logged in!</div> }
          <Link className='link' to='/'>
                    Login
                </Link>
                <Link className='link' to='/register'>
                    Register
            </Link>  

            
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
                        setNotification(true)
                        setTimeout(() => {navigateTo("/home")},1500)
                        
                    }
                })
            })} >
                <input type="Email" onChange={((e) => setUserInputs({...userInputs, email: e.target.value}))} placeholder='email'  />
                <input type="Password" onChange={((e) => setUserInputs({...userInputs, password: e.target.value}))}  placeholder='password'  />
                <button type='submit' >Submit</button>
                
            </form>
        </div>
    </div>
)
};

export default Form;
