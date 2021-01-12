import * as constants from "./authErrorsConstants";

const initialState = {};

export default function errorsForm(state = initialState, action: any) {
  switch (action.type) {
    case constants.SET_ERRORS_FORM:
      return {
        ...action.payload,
      };
    case constants.CLEAR_ERRORS_FORM:
      return initialState;
    default:
      return state;
  }
}
