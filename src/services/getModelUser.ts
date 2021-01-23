import { IStateSignUpForm } from "../types/signUpFormTypes";



export interface IGetModelUser {
  id: number,
  name: string,
  email: string,
  role: string
}

function getModelUser(stateSignUpForm: IStateSignUpForm, userId:number):IGetModelUser {
  const { name, email } = stateSignUpForm;
  const modelUser = {
    id: userId,
    name,
    email,
    role: 'user'
  }
  return  modelUser;
}

export default getModelUser;
