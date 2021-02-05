export type ErrorsSignUpFormType = {
  name?: string;
  email?: string;
  password?: string;
  password_confirmed?: string;
  request?: string;
}
export type StateSignUpFormType = {
  name: string;
  email: string;
  password: string;
  password_confirmed: string;
}
export type SignUpFormPropsType = {
  handleToggleButtonClick: () => void;
  setRegisterUserEmail: (email: string) => void;
}