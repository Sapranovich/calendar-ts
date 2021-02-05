export type ErrorsSignInFormType = {
  email?: string;
  password?: string;
  request?: string;
}

export type StateSignInFormType = {
  email: string;
  password: string;
}

export type SignInFormPropsType = {
  handleToggleButtonClick: () => void;
  registerUserEmail: string;
}