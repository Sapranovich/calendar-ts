import * as constants from "./authConstants";
import isEmpty from '../../services/isEmpty';
const initialState = {
  isAuthenticated: false,
  isLoaded: false,
  user:{},
}; 

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    // case constants.AUTH_LOGIN:
    //   return {
    //     ...state,
    //     isAuthenticated: action.payload,
    //   };
    // case constants.AUTH_LOGOUT:
    //   return {
    //     ...initialState,
    //     isAuthenticated: action.payload,
    //   };
      case constants.SET_AUTH_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        }
    case constants.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
}