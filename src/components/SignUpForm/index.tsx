import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validationSignUp from "../../services/validationSignUp";
import getModelUser from '../../services/getModelUser';
import {
  IErrorsSignUpForm,
  IStateSignUpForm,
  IUser,
  ISignUpFormProps,
} from "../../types/signUpFormTypes";
import { signUpFormRequest } from "../../redux/actions";

const SignUpForm = ({ handleToggleButtonClick }: ISignUpFormProps) => {
  const [stateForm, setStateForm] = React.useState<IStateSignUpForm>({
    name: "",
    email: "",
    password: "",
    password_confirmed: "",
  });

  const [errorsForm, setErrorsForm] = React.useState<IErrorsSignUpForm>({});

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
    const { isValid, errors } = validationSignUp(stateForm);
    if (isValid) {
      const user = getModelUser(stateForm);
      signUpFormRequest(user, setErrorsForm);
    } else {
      setErrorsForm(errors);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmitForm}>
      <h2 className="sign-up-form__title">SignUpForm</h2>
      {errorsForm.request && (
        <div className="error-request-feedback">{errorsForm.request}</div>
      )}
      <div className="sign-up-form__group">
        <input
          type="text"
          placeholder="Name"
          className="input sign-up-form__input"
          name="name"
          value={stateForm.name}
          onChange={handleInputChange}
        />
        {errorsForm.name && (
          <div className="error-feedback">{errorsForm.name}</div>
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
        {errorsForm.email && (
          <div className="error-feedback">{errorsForm.email}</div>
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
        {errorsForm.password && (
          <div className="error-feedback">{errorsForm.password}</div>
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
        {errorsForm.password_confirmed && (
          <div className="error-feedback">{errorsForm.password_confirmed}</div>
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
