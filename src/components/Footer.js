import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

function Footer() {

//for scroll to top 
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Let us help you lead a PCOS- free lifestyle!
        </p>
        <p className='footer-subscription-text'>
          Register to get started
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Register</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Who are we?</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Services</h2>
            <Link to='/SelfDiagnosis'>Self Diagnosis</Link>
            <Link to='/PeriodTracker'>Period Tracker</Link>
            <Link to='/DietPlanner'>Diet Planner</Link>
            <Link to='/ExerciseTracker' >Exercise Tracker</Link>
            <Link to='/GynoHelp'>Gyno Help</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/PrivacyPolicy'>Privacy Policy</Link>
            <Link to='/PrivacyPolicy'>Terms of Service</Link>
          </div>
        
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PCOS and Gyno Help
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>PCOS and Gyno Help © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
