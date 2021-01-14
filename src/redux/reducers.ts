import { combineReducers } from "redux";

import authReducer from './auth/authReducer';
import errorsForm from './authErrors/authErrorsReducer';
import calendar from './calendar/calendarReducers';

const rootReducers = combineReducers({
  calendar,
  authReducer,
  errorsForm
})
export default rootReducers;
