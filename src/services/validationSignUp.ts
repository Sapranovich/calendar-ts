import Validator from 'validator';
import  isEmpty from './isEmpty';

interface IValidationSignUpProps {
  name:string
  email:string
  password: string
  password_confirmed:string

}
interface IValidationSignUpErrors {
  name?:string
  email?:string
  password?: string
  password_confirmed?:string
}
interface IReturnvalidationSignUp {
  errors: IValidationSignUpErrors
  isValid: boolean
}


function validationSignUp(data:IValidationSignUpProps): IReturnvalidationSignUp {
  let errors:IValidationSignUpErrors = {};
  
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Имя должно содержать от 2 до 30 символов";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Введите имя";
  }

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

  if (!Validator.isLength(data.password_confirmed, { min: 6, max: 30 })) {
    errors.password_confirmed = "Пароль должен состоять не менее чем из 6 симоволов";
  }

  if (!Validator.equals(data.password, data.password_confirmed)) {
    errors.password_confirmed = "Пароль и Подтверждение пароля должны совпадать";
  }

  if (Validator.isEmpty(data.password_confirmed)) {
    errors.password_confirmed = "Введите пароль";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validationSignUp;