/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import AuthService from '../../../services/Auth/AuthService';

const SignUpForm = ({ switchToLoginForm, switchToRegistration, updateSignUpData }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [errorMessageOTP, setErrorMessageOTP] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
      setOtp(e.target.value);
    };
  
    const handleGetOTP = async (e) => {
      if (!mobileNumber || mobileNumber.length !== 10) {
        setErrorMessageOTP('Invalid mobile number');
        return;
      }
      e.preventDefault();
      try{
        const response = await AuthService.signinUser(mobileNumber);
        alert(response);
      }catch (error) {
        setErrorMessageOTP('Customer already registered, try Logging in');
      }
    };

    const handleSignUp = () => {
      if (!mobileNumber || mobileNumber.length !== 10) {
        setErrorMessageOTP('Invalid mobile number');
        return;
      }
      if (!otp) {
        setErrorMessageOTP('please enter the OTP');
        return;
      }
      if(otp === localStorage.getItem('otp')){
        setSuccessMessage("Verified")
        updateSignUpData(mobileNumber);
        switchToRegistration(); // Switch to the RegistrationForm component
      }
      else{
        setErrorMessageOTP('Failed to verify OTP ..');
      }
    };
  
    const handleAlreadyCustomer = () => {
      // Logic for handling already a customer link
      console.log('Already a Customer clicked');
      switchToLoginForm(); // Switch to the LoginForm component
    };
  
    return (
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign Up
          </h1>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">Mobile Number:</label>
            <input 
              type="text" 
              placeholder="10 digit Phone Number" 
              value={mobileNumber} 
              onChange={handleMobileNumberChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            />
          </div>
          <div className="flex flex-wrap items-center">
            <input 
              type="text" 
              placeholder="OTP" 
              value={otp} 
              onChange={handleOtpChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block mr-5 p-2.5"
            />
            <button onClick={handleGetOTP} className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 text-white bg-blue-500 rounded-md hover:bg-blue-600">Get OTP</button>
          </div>
          {errorMessageOTP && <div className="text-red-500 mb-2">{errorMessageOTP}</div>}
          {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}
          <button onClick={handleSignUp} className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
          <div>
            <a onClick={handleAlreadyCustomer} className="text-blue-500 hover:underline">Already a Customer?</a>
          </div>
        </div>
      </div>  
    );
  }

export default SignUpForm
