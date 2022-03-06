import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import collapse from 'reactstrap';
import navbarToggler from 'reactstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
      <navbarToggler onClick={toggle} />
      <collapse isOpen={isOpen} navbar>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              PIKOO
              <i class='fab fa-typo3' />
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
                  to='/SelfDiagnosis'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Self Diagnosis
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/PeriodTracker'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Period Tracker
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/DietPlanner'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Diet Planner
                </Link>
              </li>
             
              <li className='nav-item'>
                 <Link
                  to='/ExerciseTracker'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  {/* <a href = "https://enigmatic-dawn-82337.herokuapp.com/" className='nav-links'>Exercise Tracker</a> */}
                  Exercise Tracker
                </Link> 
              </li>
              <li className='nav-item'>
                <Link
                  to='/GynoHelp'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Gyno Help
                </Link>
              </li>

              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Register/ Login
                </Link>
              </li>
            </ul>
            {button && (
              <Button buttonStyle='btn--outline'>Register/ Login</Button>
            )}
          </div>
        </nav>
      </collapse>
    </>
  );
}

export default Navbar;
