interface IStateErrorsSignUpForm {
  name?:string
  email?: string;
  password?: string;
  password_confirmed?: string
}

export interface IStateSignUpForm {
  name:string
  email: string;
  password: string;
  password_confirmed: string
  errors: IStateErrorsSignUpForm;
}

export interface ISignUpFormProps {
  handleToggleButtonClick: () => void
}

