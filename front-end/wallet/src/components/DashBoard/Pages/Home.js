import React from 'react';
import '../../../App.css';
import Cards from '../../Helper/Cards';
// import HeroSection from '../HeroSection';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import NavbarLand from '../../Header/NavbarLand';

function Home() {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div style={{backgroundColor:"grey"}}>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
    <Cards />
    <Footer />
    </div>
  );
}

export default Home;
