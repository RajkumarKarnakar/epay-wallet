import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { ButtonTrailer } from './ButtonTrailer';
import { ButtonGetStarted } from './ButtonGetStarted';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/e-wallet-video.mp4' autoPlay loop muted />
      <h1>ePay Wallet</h1>
      <p>An Online Payment Application</p>
      <div className='hero-btns'>
        <ButtonGetStarted
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </ButtonGetStarted>
        <ButtonTrailer
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </ButtonTrailer>
      </div>
    </div>
  );
}

export default HeroSection;
