import React from "react";
import { Link } from "react-router-dom";

interface ILoginFormProps {
  handleToggleButtonClick: () => void;
}

const SignInForm = ({ handleToggleButtonClick }: ILoginFormProps) => {
  return (
    <form className="sign-in-form">
      <h2 className="sign-in-form__title">SignInForm</h2>

      <div className="sign-in-form__group">
        <input
          type="email"
          placeholder="Email"
          className="input sign-in-form__input"
          name="email"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-in-form__group">
        <input
          type="password"
          placeholder="Password"
          className="input sign-in-form__input"
          name="password"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-in-form__group">
        <input
          type="password"
          placeholder="Password confirmed"
          className="input sign-in-form__input"
          name="password-confirmed"
        />
        <div className="error-feedback"></div>
      </div>

      <div className="sign-in-form__group">
        <button type="submit" className="button">
          Вход
        </button>
        <button onClick={handleToggleButtonClick}> перейти к SignUp</button>
        <Link to="/">
          <button> на главную</button>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
