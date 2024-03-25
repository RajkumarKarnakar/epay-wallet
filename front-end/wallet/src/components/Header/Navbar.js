import React, { useState, useEffect } from 'react';
import { Button } from '../Helper/Button';
import { Link } from 'react-router-dom';
import AuthService from '../../services/Auth/AuthService';
import './Navbar.css';
import { ButtonLogout } from '../Helper/ButtonLogout';
// import axios from '../../services/API/axios';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const [userName, setUserName] = useState('');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // const getCustomerDetails = (uniqueId) => {
  //   axios.get(`/customer/${uniqueId}`, {}).then(
  //     (response) => {
  //       console.log(response.data);
  //       setUserName(response.data.firstName);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };

  const logoutUser = () =>{
    const uniqueId = localStorage.getItem('uniqueId')
    try{
      AuthService.logoutUser(uniqueId);
    }catch (error){
      alert("Logout failed. Please try again later.")
    }
  }

  // const fetchUserName = () => {
  //   const uniqueId = localStorage.getItem('uniqueId');
  //   console.log(uniqueId)
  //   if(uniqueId){
  //     try{
  //       getCustomerDetails(uniqueId);
  //     } catch (error){
  //       console.log('navbar fetch UserName:' + error);
  //     }
  //   }
  // }

  useEffect(() => {
    // fetchUserName();
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ePay
            {/* <i className='fab fa-typo3' /> */}
           
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/dashboard'
                className='nav-links'
              >
                Welcome, {userName}
              </Link>
            </li> */}
            {/* responsive text links */}
            <li>
              <Link
                to='/user-profile'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to='/auth'
                className='nav-links-mobile'
                onClick={logoutUser}
              >
                Logout
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Profile</Button>}
          {button && <ButtonLogout buttonStyle='btn--outline'>Logout</ButtonLogout>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
