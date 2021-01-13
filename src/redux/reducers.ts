import { combineReducers } from "redux";

import authReducer from './auth/authReducer';
import errorsForm from './authErrors/authErrorsReducer';

const rootReducers = combineReducers({
  authReducer,
  errorsForm
})
export default rootReducers;
