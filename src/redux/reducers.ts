import { combineReducers } from "redux";

import authReducer from './auth/authReducer';

const rootReducers = combineReducers({
  authReducer
})
export default rootReducers;
