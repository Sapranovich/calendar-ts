import * as constants from "./authConstants";

import {IGetModelUser} from '../../services/getModelUser';
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
