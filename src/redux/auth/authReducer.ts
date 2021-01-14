import * as constants from "./authConstants";

const initialState = {
  isAuthenticated: true,
  isLoaded: false,
  user:{
    name:'Sapranovich Andrey',
    email: 'SapranovichAndrey@yandex.ru',
    role: ['admin', 'user', 'trainee'],
    id: 13,
  }
};

// const initialState = {
//   isAuthenticated: false,
//   user:{}
// };

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
    case constants.SET_LOADED:
      return {
        ...initialState,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
}