import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
import BeneficiaryTable from '../Tables/BeneficiaryTable'
import NavbarLand from '../../Header/NavbarLand'

const AddBenificary = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <div className='flexed'>
        <div className='boxed'>
          <BeneficiaryTable/> 
        </div>
        <div>
           <AddBenificaryForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddBenificary
