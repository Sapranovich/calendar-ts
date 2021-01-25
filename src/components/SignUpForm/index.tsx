import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import getModelUser from "../../services/getModelUser";
import validationSignUp from "../../services/validationSignUp";
import { IDecodedToken } from "../../types/decodedTokenTypes";
import { IErrorsSignUpForm, IStateSignUpForm, ISignUpFormProps } from "../../types/signUpFormTypes";

import * as CONSTANTS from '../../constants';

const SignUpForm = ({ handleToggleButtonClick, setRegisterUserEmail }: ISignUpFormProps) => {
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
  React.useEffect(() => {
    setRegisterUserEmail("");
  },[setRegisterUserEmail]);

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validationSignUp(stateForm);
    if (isValid) {
      // очень много логики, возможно нужно перенести в action или в services
      const user = {
        email: stateForm.email,
        password: stateForm.password,
      };
      axios
        .post(`${CONSTANTS.BACKEND_URL}/signup`, user)
        .then((res) => {
          const { accessToken } = res.data;
          const decodedToken: IDecodedToken = jwt_decode(accessToken);
          const userId = +decodedToken.sub;
          const modelUser = getModelUser(stateForm, userId);
          axios
            .post(`${CONSTANTS.BACKEND_URL}/data-users`, modelUser)
            .catch((err: any) => setErrorsForm({ request: err.response.data }));
        })
        .then(() => {
          handleToggleButtonClick();
          setRegisterUserEmail(user.email);
        })
        .catch((err: any) => setErrorsForm({ request: err.response.data }));
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
        <button
          type="submit"
          className="button"
        >
          Регистрация
        </button>
        <button type ='button' onClick={handleToggleButtonClick}> перейти к Signin</button>
        <Link to="/">
          <button> на главную</button>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;