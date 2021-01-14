import * as constants from "./authConstants";

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
