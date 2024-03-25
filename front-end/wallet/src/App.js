import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPageComponent from './components/LandingPage/LandingPageComponent';
import AuthComponent from './components/Auth/AuthComponent'
import Home from './components/DashBoard/Pages/Home';
import AboutUs from './components/DashBoard/Pages/AboutUs';
import ContactUs from './components/DashBoard/Pages/ContactUs';
import SendMoney from './components/DashBoard/Pages/SendMoney';
import PayBills from './components/DashBoard/Pages/PayBills';
import AddMoney from './components/DashBoard/Pages/AddMoney';
import CheckBalance from './components/DashBoard/Pages/CheckBalance';
import AddBenificary from './components/DashBoard/Pages/AddBenificary';
import TransactionHistory from './components/DashBoard/Pages/TransactionHistory';
import Kyc from './components/DashBoard/Pages/Kyc';
import Profile from './components/DashBoard/Pages/Profile';
import AddBankAccount from './components/DashBoard/Pages/AddBankAccount';
import TermsAndConditions from './components/DashBoard/Pages/TermsAndConditions';

const App = () => {
  return (   
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPageComponent />} />
          <Route path="/auth" element={<AuthComponent />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/send-money' element={<SendMoney />} />
          <Route path='/pay-bills' element={<PayBills />} />
          <Route path='/add-money' element={<AddMoney />} />
          <Route path='/check-balance' element={<CheckBalance />} />
          <Route path='/add-benificary' element={<AddBenificary />} />
          <Route path='/transaction-history' element={<TransactionHistory />} />
          <Route path='/kyc' element={<Kyc />} />
          <Route path='/user-profile' element={<Profile/>}/>
          <Route path='/add-bank-account' element={<AddBankAccount />} /> 
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>}></Route>
          
        </Routes>
      </Router>
    </div>


  )
}

export default App


