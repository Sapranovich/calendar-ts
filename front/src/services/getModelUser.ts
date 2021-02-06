import { StateSignUpFormType } from "../types/signUpFormTypes";
import { USER_ROLES } from "../data";

export type ModelUserType = {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
}

function getModelUser(stateSignUpForm: StateSignUpFormType, userId: number): ModelUserType {
  const { name, email } = stateSignUpForm;
  const modelUser = {
    id: userId,
    name,
    email,
    role: USER_ROLES.USER,
  };
  return modelUser;
}

export default getModelUser;
