import Validator from "validator";
import isEmpty from "./isEmpty";

interface IValidationSignUpProps {
  name: string;
  email: string;
  password: string;
  password_confirmed: string;
}
interface IValidationSignUpErrors {
  name?: string;
  email?: string;
  password?: string;
  password_confirmed?: string;
}
interface IReturnvalidationSignUp {
  errors: IValidationSignUpErrors;
  isValid: boolean;
}

function validationSignUp(
  data: IValidationSignUpProps
): IReturnvalidationSignUp {
  let errors: IValidationSignUpErrors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Enter your name";
  }

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

  if (!Validator.isLength(data.password_confirmed, { min: 6, max: 30 })) {
    errors.password_confirmed =
      "The password must be at least 6 characters long";
  }

  if (!Validator.equals(data.password, data.password_confirmed)) {
    errors.password_confirmed = "Password and confirm password must match";
  }

  if (Validator.isEmpty(data.password_confirmed)) {
    errors.password_confirmed = "Enter password";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validationSignUp;
