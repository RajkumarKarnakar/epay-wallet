import React from 'react';
import './Footer.css';
//import { Button } from '../Helper/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p> */}
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          
            <Link to='/about-us'>About Us</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            
            <Link to='https://www.youtube.com/watch?v=_S6gQSu2pBA'>Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <Link to='https://www.instagram.com'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
            <Link to='https://www.twitter.com/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ePay
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>ePay © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://www.twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://www.linkedin.com/'
            >
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
