import isEmpty from "../../services/isEmpty";

import { ModelUserType } from '../../services/getModelUser';

import * as constants from "./authConstants";
import * as actions from "./authActions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type InitialStateType = {
  isAuthenticated: boolean
  isLoaded: boolean
  user: ModelUserType 
};

const initialState = {
  isAuthenticated: false,
  isLoaded: false,
  user: {},
};

export default function auth(state = initialState, action: ActionTypes):InitialStateType {
  switch (action.type) {
    case constants.SET_AUTH_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case constants.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
}
