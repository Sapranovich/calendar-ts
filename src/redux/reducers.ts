import { combineReducers } from "redux";

import authReducer from './auth/authReducer';
import calendar from './calendar/calendarReducers';

import users from './users/usersReducers';

const rootReducers = combineReducers({
  calendar,
  authReducer,
  users
})
export default rootReducers;
