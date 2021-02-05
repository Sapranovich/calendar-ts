import { ModelUserType } from "../../services/getModelUser";

import * as constants from "./usersConstants";

//  в данный момент все пользователи сохранаются в компоненте UsersList... Возможно лучше эти данные перенести сюда 
type SetAllUsersActionType = {
  type: typeof constants.SET_ALL_USERS;
  payload: ModelUserType[];
};
export const setAllUsers = (arrayUsers: ModelUserType[]): SetAllUsersActionType => {
  return {
    type: constants.SET_ALL_USERS,
    payload: arrayUsers,
  };
};
