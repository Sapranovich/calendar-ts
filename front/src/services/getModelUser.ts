import { IStateSignUpForm } from "../types/signUpFormTypes";
import { BASIC_ROLES } from '../constants';

export interface IGetModelUser {
  id?: number,
  name?: string,
  email?: string,
  role?: string
}

function getModelUser(stateSignUpForm: IStateSignUpForm, userId:number):IGetModelUser {
  const { name, email } = stateSignUpForm;
  const modelUser = {
    id: userId,
    name,
    email,
    role: BASIC_ROLES.USER
  }
  return  modelUser;
}

export default getModelUser;
