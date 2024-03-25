import React, { useEffect, useState } from 'react';
import "./Profile.css";
// import AuthService from '../../../services/Auth/AuthService';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import axios from '../../../services/API/axios';
import NavbarLand from '../../Header/NavbarLand';

function Profile() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [mobile,setMobile] = useState("");
    const [dob,setDob] = useState("");
    const [wallet,setWalletId] = useState("");

    const getCustomerDetails = (uniqueId) => {
        axios.get(`/customer/${uniqueId}`, {}).then(
          (response) => {
            console.log(response.data);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setMobile(response.data.mobileNumber);
            setDob(response.data.dob);
            setWalletId(response.data.wallet.walletId);
          },
          (error) => {
            console.log(error);
          }
        );
      };   

    useEffect ( () =>{
        const uniqueId = localStorage.getItem('uniqueId')
        getCustomerDetails(uniqueId);
    },[])
    
    const isLoggedIn = localStorage.getItem("uniqueId") !== null;
    return (
      <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
       <div class="profile-container">
        <div class="profile-info">
          <h1 className='heading'>User Profile</h1>
            <div class=" containerInside texted">
                  <table >
                    <tr>
                        <th>First Name:</th>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <th>Last Name:</th>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <th>Mobile Number:</th>
                        <td>{mobile}</td>
                    </tr>
                    <tr>
                        <th>Wallet Id:</th>
                        <td>{wallet}</td>
                    </tr>
                    <tr>
                        <th>Date Of Birth:</th>
                        <td>{dob}</td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );

    
}

export default Profile