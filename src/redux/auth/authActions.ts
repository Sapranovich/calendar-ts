import * as constants from "./authConstants";

import { IAuthUser } from '../../components/SignInForm';



export function setAuthUser(user:IAuthUser | {}){
return {
  type: constants.SET_AUTH_USER,
  payload:user
}
}
// export function setErrors(errors) {
//   return {
//     type: constants.SET_ERRORS,
//     payload: errors
//   };
// }


export function authLogin() {
  return {
    type: constants.AUTH_LOGIN,
    payload: true
  };
}

export function authLogout() {
  return {
    type: constants.AUTH_LOGOUT,
    payload: false
  };
}


export function setLoaded(boolean:boolean){
  return {
    type: constants.SET_LOADED,
    payload: boolean
  }
}
