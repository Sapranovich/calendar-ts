import React from "react";

import { SignInForm, SignUpForm } from "../../components";

const Login = () => {
  const [isSignUpForm, toggleIsSignUpForm] = React.useState(false);
  const [registerUserEmail, setRegisterUserEmail] = React.useState('');
  const handleToggleButtonClick = () => {
    toggleIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="login">
      <div className='wrapper'>
      <div className="login__wrapper">
        {!isSignUpForm ? (
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

