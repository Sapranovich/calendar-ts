import React from "react";
import { Link } from "react-router-dom";

interface ILoginFormProps {
  handleToggleButtonClick: () => void;
}
const SignUpForm = ({ handleToggleButtonClick }: ILoginFormProps) => {
  return (
    <form className="sign-up-form">
      <h2 className="sign-up-form__title">SignInForm</h2>
      
      <div className="sign-up-form__group">
        <input
          type="text"
          placeholder="Name"
          className="input sign-up-form__input"
          name="name"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-up-form__group">
        <input
          type="email"
          placeholder="Email"
          className="input sign-up-form__input"
          name="email"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-up-form__group">
        <input
          type="password"
          placeholder="Password"
          className="input sign-up-form__input"
          name="password"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-up-form__group">
        <input
          type="password"
          placeholder="Password confirmed"
          className="input sign-up-form__input"
          name="password-confirmed"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-up-form__group">
        <button type="submit" className="button">
          Регистрация
        </button>
        <button onClick={handleToggleButtonClick}> перейти к Signin</button>
        <Link to="/">
          <button> на главную</button>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
