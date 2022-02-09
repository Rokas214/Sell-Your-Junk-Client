import React from 'react';
import { useState } from 'react';

const Add = () => {
    const [input, setInput] = useState()
    
    
  return <div>
      
      <form onSubmit={((e) => {
            e.preventDefault()
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
        })} >
            <input type="text" onChange={((e) => setInput({...input,price: e.target.value}))} placeholder='enter price'  />
            <button type='submit' >Submit</button> 
        </form>
  </div>;
};

export default Add;
