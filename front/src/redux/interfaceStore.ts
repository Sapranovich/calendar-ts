import * as auth from "./auth/authReducer";
import * as calendar from "./calendar/calendarReducer";
import * as messages from "./messages/messagesReducer";
import * as modal from "./modal/modalReducer";

export default interface IStore {
  auth: auth.InitialStateType;
  calendar: calendar.InitialStateType;
  messages: messages.InitialStateType;
  modal: modal.InitialStateType;
}
