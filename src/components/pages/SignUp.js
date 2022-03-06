import React, {useState} from 'react';
import '../../App.css';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Footer from '../Footer';


function SignUp() {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
      left: registrationFormStatus ? -700 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
      left: registrationFormStatus ? 0 : 700, // Register form sliding positions 
    });
  
    const loginBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 2px #311231",  //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
      borderBottom: registrationFormStatus
        ? "solid 2px #311231"
        : "solid 0px transparent", //Animate bottom border of register button
    });
  
    function registerClicked() {
        
      setRegistartionFormStatus(true);
    }
    function loginClicked() {
      setRegistartionFormStatus(false);
    }
  
    return (
      <>
        <div className="sign-up">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <animated.button
            onClick={loginClicked}
            id="loginBtn"
            style={loginBtnProps}
          >
            Login
          </animated.button>
          <animated.button
            onClick={registerClicked}
            id="registerBtn"
            style={registerBtnProps}
          >
            Register
          </animated.button>
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <RegisterForm />
          </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
        <Link
                to='/'
               
              >
                Forgot your password?
              </Link>
        </animated.div>
      </div>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  function LoginForm() {
    return (
      <React.Fragment >
        <label for="username">EMAIL</label>
        <input type="text" id="email" />
        <label for="password">PASSWORD</label>
        <input type="password" id="password" />
        <Link
                to='/'
               
              >
                <input type="submit" value="submit" className="submit" />
              </Link>
      </React.Fragment>
    );
  }
  
  function RegisterForm() {
    return (
      <React.Fragment >
        <label for="fullname">full name</label>
        <input type="text" id="fullname" />
        <label for="email">email</label>
        <input type="text" id="email" />
        <label for="password">password</label>
        <input type="password" id="password" />
        <label for="confirmpassword">confirm password</label>
        <input type="password" id="confirmpassword" />
        <input type="submit" value="submit" class="submit" />
      </React.Fragment>
    );
  }

export default SignUp;