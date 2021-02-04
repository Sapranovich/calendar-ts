import React from "react";
import axios from "axios";

import { IGetModelUser } from "../../../services/getModelUser";

import * as CONSTANTS from "../../../constants";

const UserItem = ({ user }: { user: IGetModelUser }): JSX.Element => {
  const [isVisibleButttons, setIsVisibleButttons] = React.useState(false);

  const handleUpdateRoleClick = (role: string) => {
    const updateDataUser = {
      ...user,
      role
    }
    axios.put(`${CONSTANTS.BACKEND_URL}/data-users/${user.id}`, updateDataUser)
    .then(()=>{
      console.log(updateDataUser, user)
    })
    console.log(
      user,
      `Смена роли пользователя ${user.email} с ${user.role} на ${role} с последующим запросом на обновленный лист users`
    );
  };

  return (
    <li
      className={`user user_decor-${user.role}`}
      onClick={() => setIsVisibleButttons(!isVisibleButttons)}
    >
      <h4 className="user__email">{user.email}</h4>
      {isVisibleButttons && (
        <div className="user__buttons">
          <div
            className={`button button__add ${user.role === CONSTANTS.BASIC_ROLES.USER ? "button_selected" : ""}`}
            onClick={() => handleUpdateRoleClick(CONSTANTS.BASIC_ROLES.USER)}
          >
            user
          </div>
          <div
            className={`button button__add ${user.role === CONSTANTS.BASIC_ROLES.VIEWER ? "button_selected" : ""}`}
            onClick={() => handleUpdateRoleClick(CONSTANTS.BASIC_ROLES.VIEWER)}
          >
            viewer
          </div>
        </div>
      )}
    </li>
  );
};

export default UserItem;
