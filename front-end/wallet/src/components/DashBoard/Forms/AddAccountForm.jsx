import React, { useState } from 'react';
import './Form.css';
import axios from '../../../services/API/axios'

const AddAccountForm = () => {
    const [accountNo, setAccountNo] = useState("");
    const [amount, setAmount] = useState(Math.floor(Math.random() * (1000000)));
    const [ifsc, setIfsc] = useState("");
    const [bankName, setBankName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const changedBankAccount = (events) =>{
        setAccountNo(events.target.value);
    }
    const changedIfsc = (events) =>{
        setIfsc(events.target.value);
    }
    const changedBankName = (events) =>{
        setBankName(events.target.value);
    }

    const addAccount = (accountNo, bankName, ifscCode, balance, uniqueId) => {
      setErrorMessage("Enter correct IFSC");
      return axios.post(`/bankaccount/${uniqueId}`, {
        accountNo, bankName, ifscCode, balance
      })
      .then(response => {
        setSuccessMessage("Bank Account added Successfully");
        return response;
      })
      .catch(error => {
        console.log("In add acc:"+ error);
        setErrorMessage("Failed to Add Bank Account or Account already connected.");
      });
    }

    const clickSubmit = (events) =>{
      setSuccessMessage("");
      setErrorMessage("");
      events.preventDefault();
      if (!accountNo || !bankName || !ifsc ){
        setErrorMessage("All fields are mandatory ..");
        return;
      }
      if (isNaN(accountNo) || accountNo.length !== 12){
        setErrorMessage("Bank account must be 12 digit");
        return;
      }
      if (ifsc.length !== 6){
        setErrorMessage("Enter correct IFSC");
        return;
      }
      setAmount(Math.floor(Math.random() * (1000000)));
      console.log(amount);
      try{
        const uniqueId = localStorage.getItem('uniqueId');
        addAccount(accountNo, bankName, ifsc, amount, uniqueId);
      } catch(error){
        setErrorMessage("Failed to Add Bank Account");
      }
      setAccountNo('');
      setBankName('');
      setIfsc('');
    }
  return (
    <div >
       <div className="styled-form">
        <h1 className='subheading'>ADD BANK ACCOUNT</h1>
       <form  onSubmit={clickSubmit}>
         <label >Bank Name:</label>
         <input type="text" id="bankname" name="bankname" value={bankName} onChange={changedBankName} placeholder='Bank Abbreviation'/>
         <label >Bank Account:</label>
         <input type="text" id="accountNo" name="accountNo" value={accountNo} onChange={changedBankAccount} placeholder='12 digit Account Number'/>
         <label >IFSC Code:</label>
         <input type="text" id="ifsc" name="ifsc" value={ifsc} onChange={changedIfsc} placeholder='Enter Ifsc 6-letter Code'/>

         {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
         {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
         <button type="submit">Add Bank Account</button>
       </form>
       </div>
    </div>
  );
};

export default AddAccountForm;
