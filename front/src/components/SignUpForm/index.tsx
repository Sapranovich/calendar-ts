import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import getModelUser from "../../services/getModelUser";
import validationSignUp from "../../services/validationSignUp";
import { IDecodedToken } from "../../types/decodedTokenTypes";
import { IErrorsSignUpForm, IStateSignUpForm, ISignUpFormProps } from "../../types/signUpFormTypes";

import * as CONSTANTS from '../../constants';

const SignUpForm = ({ handleToggleButtonClick, setRegisterUserEmail }: ISignUpFormProps):JSX.Element => {
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
            .catch((err: { response: { data: string } }) => setErrorsForm({ request: err.response.data }));
        })
        .then(() => {
          handleToggleButtonClick();
          setRegisterUserEmail(user.email);
        })
        .catch((err: { response: { data: string } }) => setErrorsForm({ request: err.response.data }));
    } else {
      setErrorsForm(errors);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmitForm}>
      <h2 className="sign-up-form__title">Sign Up</h2>
      {
        <div className="sign-up-form__error-request-feedback">{errorsForm.request && errorsForm.request}</div>
      }
      <div className="sign-up-form__group">
        <input
          type="text"
          placeholder="Name"
          className="input sign-up-form__input"
          name="name"
          value={stateForm.name}
          onChange={handleInputChange}
        />
      
          <div className="sign-up-form__error-feedback">{errorsForm.name && errorsForm.name}</div>
        
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
        
          <div className="sign-up-form__error-feedback">{errorsForm.email && errorsForm.email}</div>
        
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
        
          <div className="sign-up-form__error-feedback">{errorsForm.password && errorsForm.password}</div>
        
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
        
          <div className="sign-up-form__error-feedback">{errorsForm.password_confirmed &&  errorsForm.password_confirmed}</div>
        
      </div>

      <div className="sign-up-form__group-buttons">
        <button
          type="submit"
          className="button button__prim"
        >
          Sign Up
        </button>
        <p className="sign-up-form__group-buttons-text">
                Already have account? <span onClick={handleToggleButtonClick}>Login</span>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;