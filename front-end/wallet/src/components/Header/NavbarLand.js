import React, { useState, useEffect } from 'react';
// import { Button } from '../Helper/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ButtonLogin } from '../Helper/ButtonLogin';

function NavbarLand() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ePay
            {/* <i class='fab fa-typo3' /> */}
          </Link>
           <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>

              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
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
            
            <li>
              <Link 
              to='/auth'
              className='nav-links-mobile'
                onClick={closeMobileMenu}
              >     
              LogIn          
              </Link>
            </li>
          </ul> 
          {button && <ButtonLogin buttonStyle='btn--outline'>LogIn</ButtonLogin>}
        </div>
      </nav>
    </>
  );
}

export default NavbarLand;
