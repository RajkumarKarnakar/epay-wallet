import React from 'react';
import NavbarLand from '../Header/NavbarLand';
// import Scroller from '../Helper/Scroller';
import HeroSection from '../Helper/HeroSection';
import Footer from '../Footer/Footer';
import '../../App.css';
import LandingCard from '../Helper/LandingCard';


function LandingPageComponent() {
  return (
    <div style={{backgroundColor:''}}>
      <NavbarLand/>    
      {/* <Scroller/> */}
      <HeroSection/>
        <LandingCard/>
      <Footer />
    </div>
  );
}

export default LandingPageComponent;
