/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import './Form.css'
import axios from '../../../services/API/axios';

const SendMoneyForm = () => {
   
  const [sourceMobileNo, setSourceMobileNo] = useState("");
  const [recieverMobileNo, setRecieverMobileNo] = useState("");
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const changedRecieverMobileNo = (event) => {
    setRecieverMobileNo(event.target.value);
    console.log(recieverMobileNo);
  }

  const changedAmount = (event) => {
    setAmount(event.target.value);
    console.log(amount);
  }

  const sendMoney = async (sourceMobileNo, recieverMobileNo, amount) => {
    if (sourceMobileNo === recieverMobileNo) {
      setErrorMessage("Can't transfer to the same number");
      return;
    }
    if (!recieverMobileNo || recieverMobileNo.length !== 10) {
      setErrorMessage('Invalid mobile number');
      return;
    }
    if (amount <= 0) {
      setErrorMessage('Invalid Amount');
      return;
    }
    const uniqueId = localStorage.getItem('uniqueId');
    try {
        const response = await axios.post(`/sendMoney/${sourceMobileNo}/${recieverMobileNo}/${amount}/${uniqueId}`);
        console.log(response.data);
        setSuccessMessage("Amount transfer successful.");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
    } catch (error) {
        throw error;
    }
}

const clickSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
        await sendMoney(sourceMobileNo, recieverMobileNo, amount);
    } catch (error) {
      setErrorMessage("Invalid transaction or Insufficient balance.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
}


  useEffect(()=>{
    setSourceMobileNo(localStorage.getItem('mobileNumber'))
  },[]);

    


  return (
    <div className='flexed'>
     
    <div >
         <img src="images/send Money.jpg" alt="sendmoney"/>
    </div>
    <div >
      <form className="styled-form"  onSubmit={clickSubmit}>
      <h1 className='subheading'>Send Money</h1>
      <label >Sender PhoneNumber:</label>
      <input type="text" id="sMobileNo" name="sMobileNo" value={sourceMobileNo} readOnly placeholder={sourceMobileNo}/>
      <label >Reciever PhoneNumber:</label>
      <input type="text" id="rMobileNo" name="rMobileNo" onChange={changedRecieverMobileNo} placeholder='Enter Reciver Mobile No'/>
      <label >Amount:</label>
      <input type="number" id="amount" name="amount" onChange={changedAmount} placeholder='Enter Amount'/>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <button type="submit">PAY</button>
    </form>
    </div>
    </div>
  )
}

export default SendMoneyForm