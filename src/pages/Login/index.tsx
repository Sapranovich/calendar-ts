import React from "react";
import {Redirect, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { SignInForm, SignUpForm } from "../../components";

const Login = (): JSX.Element => {
  const [isSignUpForm, toggleIsSignUpForm] = React.useState(false);
  const [registerUserEmail, setRegisterUserEmail] = React.useState('');
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  const handleToggleButtonClick = () => {
    toggleIsSignUpForm(!isSignUpForm);
  };

  return isAuthenticated ? (
    <Redirect exact to='/calendar' />
  ) : (
    <div className="login">
      <div className='wrapper'>
      <div className="login__wrapper">
      <Link to ='/' className="button login__button button__add">landing page</Link>
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

