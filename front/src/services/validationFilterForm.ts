import isEmpty from "./isEmpty";
import { REG_EXP_CHECK_DATE } from "../constants";

export type ValidationFilterFormPropsType = {
  startParam: string
  endParam: string
}
export type ValidationFilterFormErrorsType = {
  startParam?: string
  endParam?: string
  warning?:string 
}
export type ReturnValidationFilterFormType = {
  errors: ValidationFilterFormErrorsType
  isValid: boolean
}

function validationFilterForm(data: ValidationFilterFormPropsType): ReturnValidationFilterFormType {
  const errors: ValidationFilterFormErrorsType = {};
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
