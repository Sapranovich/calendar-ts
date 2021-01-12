interface IStateErrorsSignInForm {
  email?: string;
  password?: string;
}

export interface IStateSignInForm {
  email: string;
  password: string;
  errors: IStateErrorsSignInForm;
}

export interface ISignInFormProps {
  handleToggleButtonClick: () => void
}

