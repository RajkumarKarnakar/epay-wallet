import React, { useState } from 'react'
import './Form.css'
import axios from '../../../services/API/axios';

const AddMoneyForm = () => {
    const [bankAccount,setBankAccount] = useState("");
    const [amount,setAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const changedAmount = (events) =>{
        setAmount(events.target.value);
    }
    const changedBankAccount = (events) =>{
        setBankAccount(events.target.value);
    }
    const submitHandler = (e) =>{
      if (amount <= 0 || !amount || !bankAccount){
        setErrorMessage("All fields are mandatory..");
        return;
      }
      if (isNaN(bankAccount) || bankAccount.length !== 12){
        setErrorMessage("Bank account must be 12 digit");
        return;
      }
      // validatitions
      e.preventDefault();  
      const BankId = bankAccount;
      const uniqueId = localStorage.getItem('uniqueId')
        axios.post(`/addMoney/${BankId}/${amount}/${uniqueId}`).then (
          (response) =>{
          console.log(response.data);
          setSuccessMessage("Ammount Added Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } ,(error)=>{
          console.log(error);
          // setErrorMessage("Transaction failed, No Ammount is deducted")
          if(!uniqueId){
            setErrorMessage("User not logged in")
          }else{
            setErrorMessage("Transaction failed or Insufficient Balance")
          }
          setTimeout(() => {
            window.location.reload();
          }, 2000);
      });
    }
  
  return (
    <div className="styled-form">
      <h1 className='subheading'>ADD MONEY</h1>
      <form  onSubmit={submitHandler} >
      <label >BankAccount:</label>
      <input type="text" id="bankAccount" name="bankAccount" required onChange={changedBankAccount} placeholder='Enter Bank Account'/>

      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required onChange={changedAmount} defaultValue="0.00" placeholder='Enter Amount'/>
      
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <button type="submit">Add Amount</button>
    </form>
    </div>
  );
}

export default AddMoneyForm
