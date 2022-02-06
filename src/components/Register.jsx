import React from 'react';
import { useState } from 'react';

const Register = () => {

    const [userInputs, setUserInputs] = useState()


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
            .then(data => console.log(data))
        })} >
            <input type="email" onChange={((e) => setUserInputs({...userInputs, email: e.target.value}))} placeholder='email'  />
            <input type="password" onChange={((e) => setUserInputs({...userInputs, password: e.target.value}))}  placeholder='password'  />
            <button type='submit' >Submit</button>
            
        </form>
    </div>
)
};

export default Register;
