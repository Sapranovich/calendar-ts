import React from "react";
import { IGetModelUser } from "../../../services/getModelUser";
import { BASIC_ROLES } from "../../../constants";
const UserItem = ({ user }: { user: IGetModelUser }) => {
  const [isVisibleButttons, setIsVisibleButttons] = React.useState(false);

  const handleUpdateRoleClick = (role: string) => {
    console.log(
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
            className={`button button__add ${user.role === BASIC_ROLES.USER ? "button_selected" : ""}`}
            onClick={() => handleUpdateRoleClick(BASIC_ROLES.USER)}
          >
            user
          </div>
          <div
            className={`button button__add ${user.role === BASIC_ROLES.VIEWER ? "button_selected" : ""}`}
            onClick={() => handleUpdateRoleClick(BASIC_ROLES.VIEWER)}
          >
            viewer
          </div>
        </div>
      )}
    </li>
  );
};

export default UserItem;
