import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setAuthUser} from '../../redux/actions';
import validationSignIn from "../../services/validationSignIn";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../services/setAuthToken';
export interface IErrorsForm {
  email?: string;
  password?: string;
  request?: string;
}

export interface IStateSignInForm {
  email: string;
  password: string;
}

export interface ISignInFormProps {
  handleToggleButtonClick: () => void;
}

export interface IAuthUser{
  email: string
  sub: string
}

export interface IDecodedToken{
  email: string
  exp: number
  iat: number
  sub: string
}

const SignInForm = ({ handleToggleButtonClick }: ISignInFormProps) => {
  const dispatch = useDispatch();
  //возможно стоит перенести ошибки в redux хранилище
  const [stateForm, setStateForm] = React.useState<IStateSignInForm>({
    email: "",
    password: "",
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
    const { isValid, errors } = validationSignIn(stateForm);
    if (isValid) {
      axios.post("http://localhost:3001/signin", stateForm)
        .then(res=> {
          const { accessToken } = res.data;
          localStorage.setItem('accessToken', accessToken);
          setAuthToken(accessToken);
          const decodedToken:IDecodedToken = jwt_decode(accessToken);
          const user:IAuthUser = {
            email: decodedToken.email,
            sub: decodedToken.sub
          }
          dispatch(setAuthUser(user));
        })
        .catch(err => setErrorsForm({ request: err.response.data }));
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
