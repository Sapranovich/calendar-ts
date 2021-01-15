import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import validationSignUp from "../../services/validationSignUp";
import { useDispatch } from "react-redux";
import axios from "axios";

export interface IErrorsForm {
  name?: string;
  email?: string;
  password?: string;
  password_confirmed?: string;
  request?: string;
}

export interface IStateForm {
  name: string;
  email: string;
  password: string;
  password_confirmed: string;
}
export interface IUser {
  email: string;
  password: string;
}

export interface ISignUpFormProps extends RouteComponentProps {
  handleToggleButtonClick: () => void;
}

const SignUpForm = ({ handleToggleButtonClick }: ISignUpFormProps) => {
  const [stateForm, setStateForm] = React.useState<IStateForm>({
    name: "",
    email: "",
    password: "",
    password_confirmed: "",
  });
  const [errorsForm, setErrorsForm] = React.useState<IErrorsForm>({});

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
      const user: IUser = {
        email: stateForm.email,
        password: stateForm.password,
      };
      // Возможно сделано криво
      // Почему-то после регистрации пользователя происходит перезагрузка страницы
      // Решил данный функционал не прописывать в action
      axios
        .post("http://localhost:3001/signup", user)
        .catch((err) => setErrorsForm({ request: err.response.data }));
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

export default withRouter(SignUpForm);
