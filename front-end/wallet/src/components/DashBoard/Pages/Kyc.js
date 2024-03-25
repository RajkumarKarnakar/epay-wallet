import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import KycForm from '../Forms/KycForm'
import NavbarLand from '../../Header/NavbarLand'
const Kyc = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <div className='flexed'>
        <KycForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Kyc;
