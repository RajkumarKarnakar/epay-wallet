import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddAccountForm from '../Forms/AddAccountForm'
import NavbarLand from '../../Header/NavbarLand'

const AddBankAccount = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <div className='flexed'>
        <div >
          <img src='images/bank (1).jpg'></img>
        </div>
        <div>
          <AddAccountForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddBankAccount
