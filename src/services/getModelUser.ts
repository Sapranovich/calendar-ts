import { IStateSignUpForm } from "../types/signUpFormTypes";

interface IGetModelUser {
  name: string;
  email: string;
  password: string;
  role: string
}

function getModelUser(stateSignUpForm: IStateSignUpForm):IGetModelUser {
  const { name, email, password } = stateSignUpForm;
  const user = {
    name: name,
    email: email,
    password: password,
    role: 'user'
  };
  return user;
}

export default getModelUser;
