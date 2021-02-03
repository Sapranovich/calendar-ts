import * as constants from "./usersConstants";
import { IGetModelUser } from "../../services/getModelUser";


//  в данный момент все пользователи сохранаются в компоненте UsersList... Возможно лучше эти данные перенести сюда 
type SetAllUsersActionType = {
  type: typeof constants.SET_ALL_USERS;
  payload: IGetModelUser[];
};
export const setAllUsers = (arrayUsers: IGetModelUser[]): SetAllUsersActionType => {
  return {
    type: constants.SET_ALL_USERS,
    payload: arrayUsers,
  };
};
