/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import AuthService from '../../../services/Auth/AuthService';
import { Link } from 'react-router-dom';

const RegistrationForm = ({ signUpData, switchToLoginForm }) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  const validateDate = (date) => {
    const currentDate = new Date();
    const userDate = new Date(date);

    const differenceInMilliseconds = Math.abs(currentDate.getTime() - userDate.getTime());
    const daysDifference = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return daysDifference < 1098;
  }

  function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (password.match(passwordRegex)) {
        return true; // Password is valid
    } else {
        return false; // Password is invalid
    }
  }

    /*
    {
      "firstName": "John",
      "lastName": "Doe",
      "mobileNumber": "1234567890",
      "gender": "male",
      "dob": "1990-01-01",
      "wallet": {
        "walletId": "123abc",
        "balance": 100,
        "kycStatus": true
      },
      "password": "your_password_here"
    }
    */

    const [registrationData, setRegistrationData] = useState({
      firstName : '',
      lastName : '',
      mobileNumber: signUpData,
      dob : '',
      gender : 'male',
      password : ''
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    if (!registrationData.firstName || !registrationData.lastName || !registrationData.dob || !registrationData.password){
      setErrorMessage('Fill all mandatory feilds');
      return;
    }
    const f = registrationData.firstName.trim().length;
    const l = registrationData.lastName.trim().length;
    if (f < 3 || l < 3 || f > 20 || f > 20){
      setErrorMessage('Name field must include 3 to 20 characters');
      return;
    }
    if (!validatePassword(registrationData.password)){
      setErrorMessage("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).");
      return;
    }
    if (registrationData.password !== confirmPassword){
      setErrorMessage('Password feilds do not match');
      return;
    }
    if (validateDate(registrationData.dob)){
      setErrorMessage('You must be atleast 3 Yrs old');
      return;
    }
    e.preventDefault();
    if (agreedToTerms) {
      const walletId = `${registrationData.mobileNumber}@epay`;
      // Create JSON object to send to backend
      const userData = {
          ...registrationData,
          password: softHash(registrationData.password),
          wallet: {
              walletId: walletId,
              balance: 1,
              kycStatus: false
          }
      };

      // Send userData to backend API
      console.log(userData);
      try {
        const response = await AuthService.registerUser(userData);
        console.log(response);
        switchToLoginForm();
      } catch (error) {
        setErrorMessage('Error registering user');
        console.error('Error registering user:', error);
      }
    }
    else {
    setErrorMessage('Customer already registered');
  }
};

  return (
    <div className="w-full bg-white text-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Registration form
        </h1>
        <div className="flex">
          <div className="mr-2 flex-grow">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
            <input type="text" value={registrationData.firstName} name='firstName' onChange={handleInputChange} className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
          </div>
          <div className="flex-grow">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
            <input type="text" value={registrationData.lastName} name='lastName' onChange={handleInputChange} className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Mobile Number:</label>
          <input type="text" value={registrationData.mobileNumber} readOnly className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Email: (Optional)</label>
          <input type="email" placeholder="Email" name='email' value={email} onChange={handleEmailChange} className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Date of Birth:</label>
          <input type="date" value={registrationData.dob} name='dob' onChange={handleInputChange} className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Gender:</label>
          <select value={registrationData.gender} name='gender' onChange={handleInputChange} className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={registrationData.password}
            name='password'border
            onChange={handleInputChange}
            className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input type="checkbox" checked={agreedToTerms} onChange={handleCheckboxChange} className="mr-2" />
          <label className='text-gray-900'>
            I agree to the <a className="text-blue-500 hover:underline"><Link to='/terms-and-conditions'>Terms of Service</Link></a> and <a className="text-blue-500 hover:underline"><Link to='/terms-and-conditions'>Privacy Policy</Link></a>
          </label>
        </div>
        {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
        <button onClick={handleRegister} disabled={!agreedToTerms} className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
      </div>
    </div>

  );
}

export default RegistrationForm
