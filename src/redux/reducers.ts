import { combineReducers } from "redux";

import authReducer from './auth/authReducer';
import calendar from './calendar/calendarReducers';
import messages from './messages/messagesReducers';
import users from './users/usersReducers';
import modal from './modal/modalReducers';

const rootReducers = combineReducers({
  calendar,
  modal,
  authReducer,
  messages,
  users
})
export default rootReducers;
