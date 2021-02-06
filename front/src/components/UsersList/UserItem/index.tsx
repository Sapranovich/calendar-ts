import React from "react";
import axios from "axios";

import { ModelUserType } from "../../../services/getModelUser";

import { BACKEND_URL, USER_ROLES } from '../../../data';

const UserItem = ({ user, setAllUsers }: { user: ModelUserType, setAllUsers: () => void }): JSX.Element => {
  const [isVisibleButttons, setIsVisibleButttons] = React.useState(false);

  const handleUpdateRoleClick = (role: string) => {
    const updateDataUser = {
      ...user,
      role
    }
    axios
      .put(`${BACKEND_URL}/data-users/${user.id}`, updateDataUser)
      .then(()=>{
        setAllUsers();
      })
    console.log(`Смена роли пользователя ${user.email} с ${user.role} на ${role} с последующим запросом на обновленный лист users`);
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
            className={`button button__add ${user.role === USER_ROLES.USER ? "button_selected" : ""}`}
            onClick={() => handleUpdateRoleClick(USER_ROLES.USER)}
          >
            User
          </div>
          <div
            className={`button button__add ${user.role === USER_ROLES.VIEWER ? "button_selected" : ""}`}
            onClick={() => handleUpdateRoleClick(USER_ROLES.VIEWER)}
          >
            Viewer
          </div>
        </div>
      )}
    </li>
  );
};

export default UserItem;
