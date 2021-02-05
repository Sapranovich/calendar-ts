import { ModelUserType } from '../../services/getModelUser';

import * as constants from "./authConstants";

type SetAuthUserActionType = {
  type: typeof constants.SET_AUTH_USER;
  payload: ModelUserType;
};
export function setAuthUser(user: ModelUserType ): SetAuthUserActionType {
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
