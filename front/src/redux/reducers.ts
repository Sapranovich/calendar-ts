import { combineReducers } from "redux";

import auth from './auth/authReducer';
import calendar from './calendar/calendarReducers';
import messages from './messages/messagesReducers';
import users from './users/usersReducers';
import modal from './modal/modalReducers';



const rootReducers = combineReducers({
  calendar,
  modal,
  auth,
  messages,
  users
});
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
