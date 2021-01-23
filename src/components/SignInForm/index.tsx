import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/actions";
import validationSignIn from "../../services/validationSignIn";

import setAuthToken from "../../services/setAuthToken";
import jwt_decode from "jwt-decode";
import axios from "axios";
import {
  IErrorsSignInForm,
  IStateSignInForm,
  ISignInFormProps,
} from "../../types/signInFormTypes";
import { IDecodedToken } from "../../types/decodedTokenTypes";

const URL_DB = "http://localhost:3001";

const SignInForm = ({ handleToggleButtonClick, registerUserEmail }: ISignInFormProps) => {
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
  React.useEffect(()=>{
    setStateForm({...stateForm, email: registerUserEmail})
  },[registerUserEmail])

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validationSignIn(stateForm);
    if (isValid) {
      axios
        .post(`${URL_DB}/signin`, stateForm)
        .then((res: any) => {
          const { accessToken } = res.data;
          localStorage.setItem("accessToken", accessToken);
          setAuthToken(accessToken);
          const decodedToken: IDecodedToken = jwt_decode(accessToken);
          const idUser = decodedToken.sub;
          axios
            .get(`${URL_DB}/data-users/${idUser}`)
            .then((res: any) => dispatch(setAuthUser(res.data)));
        })
        .catch((err: any) => setErrorsForm({ request: err.response.data }));
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
        <button type='submit' className="button">
          Вход
        </button>
        <button type='button' onClick={handleToggleButtonClick}>перейти к SignUp</button>
        <Link to="/">
          <button> на главную</button>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
