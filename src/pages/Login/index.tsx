import React from "react";
import {Redirect} from 'react-router-dom';
import { SignInForm, SignUpForm } from "../../components";

const Login = () => {
  const [isSignUpForm, toggleIsSignUpForm] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [registerUserEmail, setRegisterUserEmail] = React.useState('');
  const handleToggleButtonClick = () => {
    toggleIsSignUpForm(!isSignUpForm);
  };
  const handleRedirectButtonClick = () => {
    setRedirect(true);
  };

  return redirect ? (
    <Redirect exact to='/' />
  ) : (
    <div className="login">
      <div className='wrapper'>
      <div className="login__wrapper">
      <button className="button login__button" onClick={handleRedirectButtonClick}>landing page</button>
        {isSignUpForm ? (
          <SignUpForm handleToggleButtonClick={handleToggleButtonClick} setRegisterUserEmail={setRegisterUserEmail}/>
        ) : (
          <SignInForm handleToggleButtonClick={handleToggleButtonClick} registerUserEmail={registerUserEmail}/>
        )}
      </div>
      </div>
    </div>
  );
};

export default Login;

