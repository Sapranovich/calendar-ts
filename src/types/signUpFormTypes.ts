export interface IErrorsSignUpForm {
  name?: string;
  email?: string;
  password?: string;
  password_confirmed?: string;
  request?: string;
}
export interface IStateSignUpForm {
  name: string;
  email: string;
  password: string;
  password_confirmed: string;
}
export interface IUser {
  email: string;
  password: string;
}
export interface ISignUpFormProps {
  handleToggleButtonClick: () => void;
  setRegisterUserEmail:(email:string) => void
}
