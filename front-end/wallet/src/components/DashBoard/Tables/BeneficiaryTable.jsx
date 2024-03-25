import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from '../../../services/API/axios';

const BeneficiaryTable = () => {
  const [beneficiary, setBeneficiary] = useState([]);

  useEffect(() => {
    getAllBeneficiary();
  }, []);

  const getAllBeneficiary = () => {
    const uniqueId = localStorage.getItem('uniqueId');
    axios.get(`/beneficiary/${uniqueId}`).then(
      (response) => {
        console.log(response.data);
        setBeneficiary(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const removeBeneficiary = (bId) => {
    
    const uniqueId = localStorage.getItem('uniqueId');
    axios.delete(`/beneficiary/${uniqueId}/${bId}`).then(
      (response) => {
        console.log(response.data);
        // If removal is successful, update the beneficiary list
        setBeneficiary(beneficiary.filter(item => item.bid !== bId));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
        <h1 className='subheading'>LIST OF BENEFICIARY</h1>
      <table className="custom-table table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Relation</th>
            <th>Remove beneficiary</th>
          </tr>
        </thead>
        <tbody>
          {beneficiary.length > 0 ? (
            beneficiary.map((item) => (
              <tr key={item.bid}>
                <td>{item.name}</td>
                <td>{item.mobileNo}</td>
                <td>{item.relation}</td>
                <td>
                  <button style={{color: "white"}} onClick={() => removeBeneficiary(item.bid)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No beneficiaries</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BeneficiaryTable;
