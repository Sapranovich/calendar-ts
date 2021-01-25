import * as constants from "./authConstants";
import { IAuthUser } from "../../types/decodedTokenTypes";

type SetAuthUserActionType = {
  type: typeof constants.SET_AUTH_USER;
  payload: IAuthUser | {};
};
export function setAuthUser(user: IAuthUser | {}): SetAuthUserActionType {
  return {
    type: constants.SET_AUTH_USER,
    payload: user,
  };
}

type SetLoadedActionType = {
  type: typeof constants.SET_LOADED;
  payload: boolean;
};
export function setLoaded(boolean: boolean): SetLoadedActionType {
  return {
    type: constants.SET_LOADED,
    payload: boolean,
  };
}
