import * as constants from "./authConstants";

const initialState = {
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case constants.AUTH_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case constants.AUTH_LOGOUT:
      return {
        ...initialState,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
}
