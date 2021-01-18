import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInFormRequest } from "../../redux/actions";
import validationSignIn from "../../services/validationSignIn";

import {IErrorsSignInForm , IStateSignInForm, ISignInFormProps } from '../../types/signInFormTypes';


const SignInForm = ({ handleToggleButtonClick }: ISignInFormProps) => {
  const dispatch = useDispatch();
  //возможно стоит перенести ошибки в redux хранилище
  const [stateForm, setStateForm] = React.useState<IStateSignInForm>({
    email: "",
    password: "",
  });
  const [errorsForm, setErrorsForm] = React.useState<IErrorsSignInForm>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateForm({
      ...stateForm,
      [event.target.name]: event.target.value,
    });
    setErrorsForm({
      ...errorsForm,
      request: "",
      [event.target.name]: "",
    });
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validationSignIn(stateForm);
    if (isValid) {
      dispatch(signInFormRequest(stateForm, setErrorsForm));
    } else {
      setErrorsForm(errors);
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmitForm}>
      <h2 className="sign-in-form__title">SignInForm</h2>
      {errorsForm.request && (
        <div className="error-request-feedback">{errorsForm.request}</div>
      )}
      <div className="sign-in-form__group">
        <input
          type="text"
          placeholder="Email"
          className="input sign-in-form__input"
          name="email"
          value={stateForm.email}
          onChange={handleInputChange}
        />
        {errorsForm.email && (
          <div className="error-feedback">{errorsForm.email}</div>
        )}
      </div>

      <div className="sign-in-form__group">
        <input
          type="password"
          placeholder="Password"
          className="input sign-in-form__input"
          name="password"
          value={stateForm.password}
          onChange={handleInputChange}
        />
        {errorsForm.password && (
          <div className="error-feedback">{errorsForm.password}</div>
        )}
      </div>

      <div className="sign-in-form__group">
        <button type="submit" className="button">
          Вход
        </button>
        <button onClick={handleToggleButtonClick}>перейти к SignUp</button>
        <Link to="/">
          <button> на главную</button>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
