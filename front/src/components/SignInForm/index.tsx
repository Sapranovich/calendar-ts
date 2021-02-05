import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

import validationSignIn from "../../services/validationSignIn";
import setAuthToken from "../../services/setAuthToken";
import { setAuthUser } from "../../redux/actions";
import { IErrorsSignInForm, IStateSignInForm, ISignInFormProps } from "../../types/signInFormTypes";
import { IDecodedToken } from "../../types/decodedTokenTypes";
import { IGetModelUser } from '../../services/getModelUser'; 

import * as CONSTANTS from '../../constants';

const SignInForm = ({ handleToggleButtonClick, registerUserEmail }: ISignInFormProps): JSX.Element => {
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
    if(registerUserEmail) setStateForm({...stateForm, email: registerUserEmail});
    //  не могу понять, в чем тут ошибка 
  },[registerUserEmail])

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validationSignIn(stateForm);
    if (isValid) {
      // Возможно стоит перенести в action
      axios
        .post(`${CONSTANTS.BACKEND_URL}/signin`, stateForm)
        .then((res: { data: { accessToken: string } }) => {
          const { accessToken } = res.data;
          localStorage.setItem("accessToken", accessToken);
          setAuthToken(accessToken);
          const decodedToken: IDecodedToken = jwt_decode(accessToken);
          const idUser = decodedToken.sub;
          axios
            .get(`${CONSTANTS.BACKEND_URL}/data-users/${idUser}`)
            .then((res: { data: IGetModelUser }) => dispatch(setAuthUser(res.data)))
            // .catch((err: { response: { data: string } }) => setErrorsForm({ request: err.response.data }))
        })
        .catch((err: { response: { data: string } }) => {
          setErrorsForm({ request: err.response.data })
        })
    } else {
      setErrorsForm(errors);
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmitForm}>
      <h2 className="sign-in-form__title">Sign In</h2>
      
      <div className="sign-in-form__error-request-feedback">{errorsForm.request}</div>
      
      <div className="sign-in-form__group">
        <input
          type="text"
          placeholder="Email"
          className="input sign-in-form__input"
          name="email"
          value={stateForm.email}
          onChange={handleInputChange}
        />

        <div className="sign-in-form__error-feedback">{errorsForm.email}</div>
        
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

        <div className="sign-in-form__error-feedback">{errorsForm.password}</div>

      </div>

      <div className="sign-in-form__group-buttons">
        <button type='submit' className="button button__prim">
        Sign In
        </button>
        <p className="sign-in-form__group-buttons-text">You are new? <span onClick={handleToggleButtonClick}>Create new</span></p>
      </div>
    </form>
  );
};

export default SignInForm;
