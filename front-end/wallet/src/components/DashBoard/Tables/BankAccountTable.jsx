import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from '../../../services/API/axios';

const BankAccountTable = () => {
    const [accountList, setAccountList] = useState([]);

    useEffect(() => {
      getAllBankAccounts();
    }, []);
  
    const getAllBankAccounts = () => {
      const uniqueId = localStorage.getItem('uniqueId');
      console.log(uniqueId);
      const walletId = localStorage.getItem('mobileNumber')+"@epay";
      axios.get(`/bankaccounts/${walletId}/${uniqueId}`).then(
        (response) => {
          console.log(response.data);
          setAccountList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Account No.</th>
            <th>Bank Name</th>
            <th>IFSC code</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountList.length > 0 ? (
            accountList.map((item) => (
              <tr key={item.id}>
                <td>{item.accountNo}</td>
                <td>{item.bankName}</td>
                <td>{item.ifscCode}</td>
                <td>Rs. {item.balance}</td>
                {/* <td>
                  <button style={{color: "white"}} onClick={() => removeBankAccount(item.id)}>Delete</button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Bank Accounts</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BankAccountTable;