import { IGetModelUser } from '../../services/getModelUser';

import * as constants from "./authConstants";

type SetAuthUserActionType = {
  type: typeof constants.SET_AUTH_USER;
  payload: IGetModelUser;
};
export function setAuthUser(user: IGetModelUser ): SetAuthUserActionType {
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
