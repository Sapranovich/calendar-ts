import * as constants from "./authConstants";
import axios from "axios";
import setAuthToken from "../../services/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  IErrorsSignInForm,
  IStateSignInForm,
} from "../../types/signInFormTypes";
import { IErrorsSignUpForm, IUser } from "../../types/signUpFormTypes";
import {IDecodedToken, IAuthUser} from '../../types/decodedTokenTypes';
const URL_DB = "http://localhost:3001";



export function setAuthUser(user: IAuthUser | {}) {
  return {
    type: constants.SET_AUTH_USER,
    payload: user,
  };
}

export const userIsAuth = () => (dispatch: any) => {
  if (localStorage.accessToken) {
    const decodedToken: IDecodedToken = jwt_decode(localStorage.accessToken);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("accessToken");
      setAuthToken(false);
      dispatch(setAuthUser({}));
    } else {
      setAuthToken(localStorage.accessToken);
      axios.get(`${URL_DB}/users/${decodedToken.sub}`).then(res=> dispatch(setAuthUser(res.data)))
    }
  }
};

export const signInFormRequest = (
  user: IStateSignInForm,
  errorsForm: React.Dispatch<IErrorsSignInForm>
) => (dispatch: any) => {
  axios
    .post(`${URL_DB}/signin`, user)
    .then((res) => {
      const { accessToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      setAuthToken(accessToken);
      const decodedToken: IDecodedToken = jwt_decode(accessToken);
      axios.get(`${URL_DB}/users/${decodedToken.sub}`).then(res=> dispatch(setAuthUser(res.data)))
    })
    .catch((err) => errorsForm({ request: err.response.data }));
};

export const signUpFormRequest = (
  user: IUser,
  errorsForm: React.Dispatch<IErrorsSignUpForm>
) => {
  axios
    .post(`${URL_DB}/signup`, user)
    .catch((err) => errorsForm({ request: err.response.data }));
};

export function setLoaded(boolean: boolean) {
  return {
    type: constants.SET_LOADED,
    payload: boolean,
  };
}
