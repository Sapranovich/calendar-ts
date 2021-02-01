import isEmpty from "./isEmpty";
import { REG_EXP_CHECK_DATE } from "../constants";

export interface IValidationFilterFormProps {
  startParam: string
  endParam: string
}
export interface IValidationFilterFormErrors {
  startParam?: string
  endParam?: string
  worning?:string 
}
export interface IReturnvalidationFilterForm {
  errors: IValidationFilterFormErrors
  isValid: boolean
}

function validationFilterForm(data:IValidationFilterFormProps):IReturnvalidationFilterForm {
  let errors:IValidationFilterFormErrors = {};
  if (!data.startParam.match(REG_EXP_CHECK_DATE)) {
    errors.startParam = "Date entered in the wrong format";
  }
  if (!data.endParam.match(REG_EXP_CHECK_DATE)) {
    errors.endParam = "Date entered in the wrong format";
  }
  if (isEmpty(data.startParam)) {
    errors.startParam = "Enter the date";
  }
  if (isEmpty(data.endParam)) {
    errors.endParam = "Enter the date";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validationFilterForm;
