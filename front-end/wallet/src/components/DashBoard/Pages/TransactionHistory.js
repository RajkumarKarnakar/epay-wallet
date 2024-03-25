import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import TransactionTable from '../Tables/TransactionTable'
import NavbarLand from '../../Header/NavbarLand'

const TransactionHistory = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />}  
    <br/>
    <br/>
    <div className='boxed'>
      <TransactionTable/>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default TransactionHistory
