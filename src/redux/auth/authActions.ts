import * as constants from "./authConstants";
import { IAuthUser } from "../../types/decodedTokenTypes";

// дописать typeScript

export function setAuthUser(user: IAuthUser | {}) {
  return {
    type: constants.SET_AUTH_USER,
    payload: user,
  };
}

export function setLoaded(boolean: boolean) {
  return {
    type: constants.SET_LOADED,
    payload: boolean,
  };
}
