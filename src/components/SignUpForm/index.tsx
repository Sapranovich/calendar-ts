import React from "react";
import { Link } from "react-router-dom";
import validationSignUp from "../../services/validationSignUp";
import {
  IStateSignUpForm,
  ISignUpFormProps,
} from "../../typesQuestions/signUpFormTypes";

const SignUpForm = ({ handleToggleButtonClick }: ISignUpFormProps) => {
  const [stateForm, setStateForm] = React.useState<IStateSignUpForm>({
    name: "",
    email: "",
    password: "",
    password_confirmed: "",
    errors: {},
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateForm({
      ...stateForm,
      [event.target.name]: event.target.value,
      errors: {
        [event.target.name]: "",
      },
    });
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const user = {
      name: stateForm.name,
      email: stateForm.email,
      password: stateForm.password,
      password_confirmed: stateForm.password_confirmed,
    };
    const { isValid, errors } = validationSignUp(user);
    if (isValid) {
      console.log(user);
    } else {
      setStateForm({
        ...stateForm,
        errors,
      });
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmitForm}>
      <h2 className="sign-up-form__title">SignUpForm</h2>

      <div className="sign-up-form__group">
        <input
          type="text"
          placeholder="Name"
          className="input sign-up-form__input"
          name="name"
          value={stateForm.name}
          onChange={handleInputChange}
        />
        {stateForm.errors.name && (
          <div className="error-feedback">{stateForm.errors.name}</div>
        )}
      </div>

      <div className="sign-up-form__group">
        <input
          type="text"
          placeholder="Email"
          className="input sign-up-form__input"
          name="email"
          value={stateForm.email}
          onChange={handleInputChange}
        />
        {stateForm.errors.email && (
          <div className="error-feedback">{stateForm.errors.email}</div>
        )}
      </div>

      <div className="sign-up-form__group">
        <input
          type="password"
          placeholder="Password"
          className="input sign-up-form__input"
          name="password"
          value={stateForm.password}
          onChange={handleInputChange}
        />
        {stateForm.errors.password && (
          <div className="error-feedback">{stateForm.errors.password}</div>
        )}
      </div>

      <div className="sign-up-form__group">
        <input
          type="password"
          placeholder="Password confirmed"
          className="input sign-up-form__input"
          name="password_confirmed"
          value={stateForm.password_confirmed}
          onChange={handleInputChange}
        />
        {stateForm.errors.password_confirmed && (
          <div className="error-feedback">
            {stateForm.errors.password_confirmed}
          </div>
        )}
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
