import React, { useState } from 'react';
import './Form.css';
import BenificaryService from '../../../services/DashBoard/BenificiaryService';

const AddBeneficiaryForm = (props) => {
    const [bname, setBname] = useState("");
    const [mobile, setMobile] = useState("");
    const [relation, setRelation] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
   
    const handleBnameChange = (event) => {
        setBname(event.target.value);
    }
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    }
    const handleRelationChange = (event) => {
        setRelation(event.target.value);
    }
    
    const handleSubmit = async (event) => {
      setErrorMessage('');
      setSuccessMessage("");
      event.preventDefault();
      if (!mobile || !relation || !bname) {
          setErrorMessage("All fields are mandatory");
          return;
      }
      if (isNaN(mobile) || mobile.length !== 10) {
          setErrorMessage('Invalid mobile number');
          return;
      } 
      if (bname.length < 3) {
          setErrorMessage("Beneficiary name is too short");
          return;
      }
      // testing required .. (dont show any direct errors ..)
      try {
          const uniqueId = localStorage.getItem("uniqueId");
          const response = await BenificaryService.addBeneficiary(bname, mobile, relation, uniqueId);
          console.log(response.data);
          setSuccessMessage("Beneficiary is added successfully");
          setErrorMessage('');
          setBname('');
          setMobile('');
          setRelation('');
          setTimeout(() => {
            window.location.reload();
          }, 1000);

      } catch (error) {
          setErrorMessage('Error adding the beneficiary');
      }
    }

    return (
        <div className="styled-form">
               <h1 className='subheading'>ADD BENEFICIARY</h1>
                <form  onSubmit={handleSubmit}>
                    <label htmlFor="bname">Beneficiary Name:</label>
                    <input type="text" id="bname" name="bname" value={bname} onChange={handleBnameChange} placeholder='Enter Beneficiary Name'/>
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input type="tel" id="mobile" name="mobile" value={mobile} onChange={handleMobileChange} placeholder='Enter Mobile Number'/>
                    <label htmlFor="relation">Relation:</label>
                    <select id="relation" value={relation} onChange={handleRelationChange}>
                        <option value="">Select Relation Type</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="friend">Friend</option>
                        <option value="other">Other</option>
                    </select>

                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                    <button type="submit">Add Beneficiary</button>
                </form>
            </div>
    );
};

export default AddBeneficiaryForm;
