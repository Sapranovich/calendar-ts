import { combineReducers } from "redux";

import auth from './auth/authReducer';
import calendar from './calendar/calendarReducer';
import messages from './messages/messagesReducer';
import users from './users/usersReducer';
import modal from './modal/modalReducer';



const rootReducers = combineReducers({
  calendar,
  modal,
  auth,
  messages,
  users
});
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;