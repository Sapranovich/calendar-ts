import React from "react";

import { SignInForm, SignUpForm } from "../../components";

const Login = () => {
  const [isSignUpForm, toggleIsSignUpForm] = React.useState(false);

  const handleToggleButtonClick = () => {
    toggleIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="login__wrapper">
          {isSignUpForm ? (
            <SignUpForm handleToggleButtonClick={handleToggleButtonClick} />
          ) : (
            <SignInForm handleToggleButtonClick={handleToggleButtonClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
