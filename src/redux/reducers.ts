import { combineReducers } from "redux";

import authReducer from './auth/authReducer';
import calendar from './calendar/calendarReducers';
import account from './account/accountReducers';

const rootReducers = combineReducers({
  calendar,
  authReducer,
  account
})
export default rootReducers;
