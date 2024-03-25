import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import SendMoneyForm from '../Forms/SendMoneyForm'
import NavbarLand from '../../Header/NavbarLand'

const SendMoney = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <SendMoneyForm/>
      <Footer/>
    </div>
  )
}

export default SendMoney
