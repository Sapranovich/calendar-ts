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
  const errors: IValidationSignInErrors = {};

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email entered incorrectly";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Enter your email";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "The password must be at least 6 characters long";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Enter password";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validationSignIn;
