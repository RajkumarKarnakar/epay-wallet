import React, { useState, useEffect } from 'react';
// import { Button } from '../Helper/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ButtonLogin } from '../Helper/ButtonLogin';

function NavbarLogin() {
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
      <nav className='navbar' >
        <div className='navbar-container' style={{marginRight:'68%'}}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ePay
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          
         
          
        </div>
      </nav>
    </>
  );
}

export default NavbarLogin;
