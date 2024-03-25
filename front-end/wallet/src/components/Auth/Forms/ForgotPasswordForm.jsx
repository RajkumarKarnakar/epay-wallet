/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import AuthService from '../../../services/Auth/AuthService';

const ForgotPasswordForm = ({ switchToLoginForm, switchToSignUp }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageOTP, setErrorMessageOTP] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    function softHash(inputString) {
      let hash = 0;
      for (let i = 0; i < inputString.length; i++) {
        hash = (hash << 5) - hash + inputString.charCodeAt(i);
        hash |= 0;
      }
      let hashString = hash.toString();
      hashString = hashString.slice(0, 15);
    
      return hashString;
    }

    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
  
    const handleOtpChange = (e) => {
      setOtp(e.target.value);
    };
  
    const handleNewPasswordChange = (e) => {
      setNewPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };

    function validatePassword(password) {
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
      if (password.match(passwordRegex)) {
          return true; // Password is valid
      } else {
          return false; // Password is invalid
      }
    }
  
    const handleGetOTP = async (e) => {
      if (!mobileNumber || mobileNumber.length !== 10) {
        setErrorMessageOTP('Invalid mobile number');
        return;
      }
      e.preventDefault();
      try{
        const response = await AuthService.forgotPassword(mobileNumber);
        alert(response);
      }catch (error) {
        setErrorMessageOTP('Customer not registered, try Signing in');
      }
    };

    const handleSubmit = async (e) => {
      setErrorMessageOTP('');
      // Perform form submission logic
      if (!otp || !newPassword || !confirmPassword) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      if (!validatePassword(newPassword)){
        setErrorMessage("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).");
        return;
      }
      if (newPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      if(otp === localStorage.getItem('otp')){
        setSuccessMessage("Verified")
        try{
          const response = await AuthService.updatePassword(mobileNumber, softHash(newPassword));
          console.log(response);
          switchToLoginForm();
        } catch (error) {
          setErrorMessage('Error updating user password');
          console.error('Error updating user password:', error);
        }
      }
      else{
        setErrorMessage('Failed to verify OTP ..');
      }
    };
  
    return (
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 md:p-8 space-y-6">
          <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-gray-900">
            Forgot Password
          </h1>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">Mobile Number:</label>
            <input 
              type="text" 
              placeholder="10 digit Phone Number" 
              value={mobileNumber} 
              onChange={handleMobileNumberChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <div className="flex flex-wrap items-center">
            <input 
              type="text" 
              placeholder="OTP" 
              value={otp} 
              onChange={handleOtpChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mr-5 p-2.5"
            />
            <button onClick={handleGetOTP} className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 text-white bg-blue-500 rounded-md hover:bg-blue-600">Get OTP</button>
          </div>
          {errorMessageOTP && <div className="text-red-500 mb-2">{errorMessageOTP}</div>}
          {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">New Password:</label>
            <input 
              type="password" 
              placeholder="New Password" 
              value={newPassword} 
              onChange={handleNewPasswordChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">Confirm Password:</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={handleConfirmPasswordChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
          <button onClick={handleSubmit} className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
          <p className="text-sm font-light text-gray-500">
            Don't have an account yet? <a onClick={switchToSignUp} className="font-medium text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>  
      </div>
    );
  }

export default ForgotPasswordForm
