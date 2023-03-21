import React, { useState } from 'react'

function OtpValidation() {

    const [otp, setOTP] = useState("")
    const [message, setMessage ] = useState('')

    const otpValidation = () => {
        const regEx = /^\d{6}$/;
        if (regEx.test(otp)) {
          setMessage("Submitted successfully");
        } else if (!regEx.test(otp) && otp !== "") {
          setMessage("OTP is Not Valid");
        } else {
          setMessage("Enter an OTP");
        }
      };

    const handleOnChange = (e) => {
        setOTP(e.target.value)
      }
  return (
    <div className='OtpValidation'>

       <div className='heading'>
     <h4>Proceed with your OTP</h4>
        </div>
        <div className='input-box'>
            <label htmlFor=''>OTP validation </label>
            <input type="number" placeholder='number' value={otp} onChange={handleOnChange}></input>
            <br></br>
            <button onClick={otpValidation}> SUBMIT </button>
            {message}
        </div>
    </div>
  )
}

export default OtpValidation