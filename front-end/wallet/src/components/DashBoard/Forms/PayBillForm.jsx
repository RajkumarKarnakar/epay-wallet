/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import './Form.css';
import BillPaymentService from '../../../services/DashBoard/BillPaymentService';

const PayBillForm = () => {
    const [billType, setBillType] = useState("");
    const [amount, setAmount] = useState(0);
    const [billDescription, setBillDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const changedAmount = (event) => {
        setAmount(event.target.value);
    };

    const changedBillType = (event) => {
        setBillType(event.target.value);
    };

    const changedBillDescription = (event) => {
        setBillDescription(event.target.value);
    };

    const clickSubmit = (event) => {
      // validations
      event.preventDefault();
      if (!billType || amount <= 0 ){
        setErrorMessage("Fill correct information");
        setTimeout(() => {
            window.location.reload();
          }, 2000);
        return;
      }
      const uniqueId = localStorage.getItem('uniqueId');
      BillPaymentService.addBill(billType, amount, billDescription, uniqueId);
      setSuccessMessage("Bill paid Successfully ..")
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };

    // fecth bills shown in transactions

    return (
            <div>
                <form className="styled-form" onSubmit={clickSubmit}>
                    <h1 className='subheading'>PAY BILLS</h1>
                    <label>Bill Type:</label>
                    <select onChange={changedBillType} value={billType}>
                        <option value="">Select Bill Type</option>
                        <option value="electricityBill">Electricity Bill</option>
                        <option value="waterBill">Water Bill</option>
                        <option value="wifiRecharge">Wifi Recharge</option>
                        <option value="gasBill">Gas Bill</option>
                        <option value="other">Other</option>
                    </select>
                    <label>Amount:</label>
                    <input type="number" id="amount" name="amount" required value={amount} onChange={changedAmount} placeholder='Enter Amount' />
                    <label>Bill Description: (optional)</label>
                    <input type="text" id="billDescription" name="billDescription" value={billDescription} onChange={changedBillDescription} placeholder='Enter Bill Description' />
                    
                    {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    <button type="submit">Add Bill Payment</button>
                </form>
        </div>
    );
};

export default PayBillForm;
