/* eslint-disable eqeqeq */
// FormComponent.js
import React, { useState } from 'react';
import KYCService from '../../../services/DashBoard/KYCService';
import './Form.css';

const KycForm = (props) => {
    const [adharNumber,setAdharNumber] = useState(0);
    const [otp,setOtp] = useState(0);
    const [sysOTP,setSysOTP] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const changedAdharNumber = (events) =>{
        setAdharNumber(events.target.value);
    }
    const changedOtp = (events) =>{
        setOtp(events.target.value);
    }

    const getOTPLocally = () => {
      if (!isNaN(parseInt(adharNumber)) && adharNumber.length === 12) {
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        alert("OTP: " + randomNumber);
        setSysOTP(randomNumber);
        setErrorMessage("")
      } else{
        setErrorMessage("Adhaar Card is not valid")
      }
    };    
    
    const clickSubmit = (events) =>{
      setErrorMessage("")
      if (!otp){
        setErrorMessage("Please enter the OTP")
        return;
      }
      if (!isNaN(parseInt(adharNumber)) && adharNumber.length === 12) { 
        setErrorMessage("Dont act Smart")
        return;
      }
      const kyc = localStorage.getItem("kyc")
      if (kyc == 1){
        setSuccessMessage("Kyc is done already");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        return;
      }
      events.preventDefault();  
      if (otp == sysOTP){
        try{
          const uniqueId = localStorage.getItem('uniqueId');
          console.log(uniqueId);
          KYCService.updateKYCStatus(uniqueId);
          setSuccessMessage("KYC Complete");
          localStorage.setItem("kyc", 1);
          setAdharNumber('')
          setOtp('');
        }  catch{
          setErrorMessage("KYC failed or done already")
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      }else{
        setErrorMessage("wrong OTP")
        // console.log("not working");
      }
    }
  return (
    <div className="styled-form">
      <h1 className='subheading'>KYC DETAILS</h1>
       <form  onSubmit={clickSubmit}>
        <label>Addhar Number:</label>
        <input
          type="text"
          id="adhar"
          name="adharNumber"
          onChange={changedAdharNumber}
          placeholder="Enter Aadhar 12 digit Number"
        />
        <button type="button" onClick={getOTPLocally}>
          Get OTP
        </button>
        <br/>
        <br/>
        <input
          type="text"
          id="otp"
          name="otp"
          onChange={changedOtp}
          placeholder="Enter OTP"
          pattern="[0-9]{4}"
          inputMode="numeric"
        />
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
        <button type="submit">Submit</button>
      </form>
       </div>
  );
};

export default KycForm;
