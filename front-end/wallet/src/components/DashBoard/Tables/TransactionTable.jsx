import React, { useEffect, useState } from 'react'
import './Table.css'
import axios from '../../../services/API/axios';

const TransactionTable = () => {
  const [trans, setTrans] = useState([]);
  useEffect(()=>{
    document.title="All Your Transaction"
  },[]);

  const AllTrans = () =>{
    const uniqueId = localStorage.getItem('uniqueId');
    // const uniqueId = 'B9WzsTVS';
    axios.get(`/viewAllTransaction/${uniqueId}`).then(
      (response)=>{
           console.log(response.data);
           setTrans(response.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  useEffect(()=>{
    AllTrans()
  },[]);
  // | transaction_id | amount | bank_transaction_id | description | transaction_date | transaction_type | wallet_id |
  // const randomNumber = 1694509;
  function formatTransactionDate(transactionDate) {
    // Extracting date and time parts
    let datePart = transactionDate.split("T")[0];
    let timePart = transactionDate.split("T")[1];
    
    // Removing hyphens from date and colons from time
    let dateWithoutHyphens = datePart.replace(/-/g, "");
    let timeWithoutColons = timePart.replace(/:/g, "").slice(0, -7);
    
    return dateWithoutHyphens + timeWithoutColons;
  }
  return (
    <div>
    <h1 className='subheading'>TRANSACTIONS HISTORY</h1>
    <table className='table-container custom-table'> 
      <tr>
        <th>TransactionId</th>
        <th>TransactionType</th>
        <th>Amount</th>
        <th>Description</th>
        <th>Date</th>

      </tr>
      {trans.length > 0 ? 
          trans.map((item)=>(<tr key = {item.transactionId}>
      <td>{formatTransactionDate(item.transactionDate)}{item.transactionId}</td>
      <td>{item.transactionType}</td>
      <td>Rs. {item.amount}</td>
      <td> {item.description}</td>
      <td>{(item.transactionDate).slice(0, -7)}</td>
     </tr>)):"No Transaction"}
     </table>
    </div>
  )
}

export default TransactionTable
