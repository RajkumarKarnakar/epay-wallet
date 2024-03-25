import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import AuthService from '../../services/Auth/AuthService';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

export const ButtonLogout = ({
  children,
  type,
  path = '/auth',
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const logoutUser = () =>{
    const uniqueId = localStorage.getItem('uniqueId')
    AuthService.logoutUser(uniqueId);
    
  }

  return (
    <Link to={`${path}`} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={logoutUser}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
