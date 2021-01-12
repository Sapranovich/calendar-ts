import * as constants from "./authErrorsConstants";

export function setErrorsForm(object:object){
  return {
    type:constants.SET_ERRORS_FORM,
    payload:object
  }
}

export function clearErrorsForm(){
  return {
    type:constants.CLEAR_ERRORS_FORM,
  }
}