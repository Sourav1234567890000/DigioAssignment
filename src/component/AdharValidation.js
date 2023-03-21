import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function AdharValidation() {

    const navigate = useNavigate();

    const [adhar, setAdhar] = useState("")
    const [message, setMessage ] = useState('')

    const adhaarValidation = () => {
        const regEx = /^\d{12}$/;
        if (regEx.test(adhar)) {
          setMessage(()=>navigate('/otp'));
        } else if (!regEx.test(adhar) && adhar !== "") {
          setMessage("adharnumber is Not Valid");
        } else {
          setMessage("Enter an Adhar number");
        }
      };

    const handleOnChange = (e) => {
        setAdhar(e.target.value)
      }
  return (
    <div className='AdharValidation'>
         <div className='heading'>
            <h4>Proceed with your AdharValidation</h4>
        </div>
        <div className='input-box'>
            <label htmlFor=''>Aadhar validation </label>
            <input type="number" placeholder='number' value={adhar} onChange={handleOnChange}></input>
            <br></br>
            <button onClick={adhaarValidation}>VERIFY </button>
            {message}
        </div>
    </div>
  )
}

export default AdharValidation