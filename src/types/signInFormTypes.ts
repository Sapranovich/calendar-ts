export interface IErrorsSignInForm {
  email?: string;
  password?: string;
  request?: string;
}

export interface IStateSignInForm {
  email: string;
  password: string;
}

 export interface ISignInFormProps {
  handleToggleButtonClick: () => void
  registerUserEmail:string
}





