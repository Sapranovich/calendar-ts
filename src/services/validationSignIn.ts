import Validator from "validator";
import isEmpty from "./isEmpty";

interface IValidationSignInProps {
  email: string;
  password: string;
}
interface IValidationSignInErrors {
  email?: string;
  password?: string;
}
interface IReturnvalidationSignIn {
  errors: IValidationSignInErrors;
  isValid: boolean;
}
function validationSignIn(data: IValidationSignInProps): IReturnvalidationSignIn {
  let errors: IValidationSignInErrors = {};

  if (!Validator.isEmail(data.email)) {
    errors.email = "Электронная почта введена не корректно";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Введите адрес электронной почты";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Пароль должен состоять не менее чем из 6 симоволов";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Введите пароль";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validationSignIn;
