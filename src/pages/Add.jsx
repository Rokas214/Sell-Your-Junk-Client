import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingOut from '../components/SingOut';
import "../components/style.css"
import "../index.css"
import Notification from '../components/Notification';

const Add = () => {
    const [input, setInput] = useState()
    const [error, setError] = useState(false)
    const [notification, setNotification] = useState(false)
    
    
    
  return (
        <div className='page-width' >
            <div>
                {notification && <Notification>Successfully logged out</Notification> }
            </div>
        <div className='nav' >

                <div className='links' >
                    <Link className='link' to='/home'>Home</Link>
                    <Link className='link' to='/products'>All Products</Link>
                </div>
                <div className='singout' >
                    <SingOut setNotification={setNotification} />
                </div> 
        </div>
        
        <form className='form' onSubmit={((e) => {
                e.preventDefault()
                    if(!input){
                        setError(true)
                    }else{

                        fetch('http://localhost:8080/v1/add',{
                            method: "POST",
                            headers: {
                                email: localStorage.getItem("email"),
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(input)
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    }
            })} >
                <input type="text" onChange={((e) => setInput({...input,price: e.target.value}))} placeholder='Title'  />
                <input type="text" onChange={((e) => setInput({...input,price: e.target.value}))} placeholder='Price'  />
                <textarea type="text" onChange={((e) => setInput({...input,price: e.target.value}))} placeholder='Description' id="w3review" name="w3review" rows="4" cols="50"></textarea>
                {error && <div>Please fill the inputs</div> }
                <button type='submit' >Submit</button> 
            </form>
    </div>

  )
};

export default Add;
