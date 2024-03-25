/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../../services/Auth/AuthService'

const LoginForm = ({ switchToForgotPassword, switchToSignUp }) => {
    const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
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

    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
      if (!mobileNumber || mobileNumber.length !== 10) {
        setErrorMessage('Invalid mobile number');
        return;
      }
      if (!password || password.length < 8) {
        setErrorMessage('Invalid Password');
        return;
      }
      e.preventDefault();
      try {
        await AuthService.loginUser(mobileNumber, softHash(password));
        const uniqueId = localStorage.getItem('uniqueId');
        console.log(uniqueId);

        // make sure to log out befofe asking for new session

        navigate('/dashboard');
      } catch (error) {
        setErrorMessage('Invalid mobile number or password. Please try again.');
      }
    };
    
  
    return (
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-black">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Log in to your account
            </h1>
            <div>
              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
              <input 
                type="text" 
                name='mobileNumber' 
                id='mobileNumber' 
                placeholder="10 digit Phone Number" 
                value={mobileNumber} 
                onChange={handleMobileNumberChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                aria-label="Mobile Number" 
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePasswordChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                aria-label="Password" 
                required
              />
            </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          {/* <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/> */}
                        </div>
                        <div className="ml-3 text-sm">
                          {/* <label htmlFor="remember" className="text-gray-500">Remember me</label> */}
                        </div>
                    </div>
                    <a onClick={switchToForgotPassword} className="text-sm font-medium text-primary-600 hover:underline text-blue-500">Forgot password?</a>
                </div>
                {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                <button onClick={handleLogin} className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <p className="text-sm font-light text-gray-500">
                    Don't have an account yet? <a onClick={switchToSignUp} className="font-medium text-blue-600 hover:underline">Sign up</a>
                </p>
        </div>
      </div>
    );
  }

export default LoginForm
