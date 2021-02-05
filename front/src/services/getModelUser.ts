import { StateSignUpFormType } from "../types/signUpFormTypes";
import { BASIC_ROLES } from "../constants";

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
    role: BASIC_ROLES.USER,
  };
  return modelUser;
}

export default getModelUser;
