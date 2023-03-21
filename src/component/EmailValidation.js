import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import './style.css';

import AdharValidation from './AdharValidation';

function EmailValidation() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [message, setMessage ] = useState('')

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          setMessage(  
            ()=>navigate('/adhar')
          );
        } else if (!regEx.test(email) && email !== "") {
          setMessage("Enter Valid Email");
        } else {
          setMessage("Enter an email");
        }
      };

    const handleOnChange = (e) => {
      setEmail(e.target.value)
    }
  return (
    <div className='EmailValidation'>
        <div className='heading'>
            <h4>Proceed with your email address</h4>
        </div>
        <div className='input-box'>
            <label htmlFor=''>Email: </label>
            <input type="email" placeholder='Email' value={email} onChange={handleOnChange}></input>
            <br></br>
            <button onClick={emailValidation}>CONTINUE </button>
            {/* <div className='nav-btn'>
            <button onClick={()=>navigate('/adhar')}>Next</button>
            </div> */}
           <span className='msg'> {message}  </span>
        </div>
    </div>
  )
}

export default EmailValidation