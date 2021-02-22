import React from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

import Segment from "../Calendar/Segment";
import { Loading } from "../../pages";

import { UserMessageDataType } from "../../types/messagesDataTypes";

import { BACKEND_URL, USER_ROLES } from "../../data";

type MatchType = {
  params: {
    userId?: string;
  };
};

type SelectedUserDataState = {
  email?: string;
  id?: number;
  name?: string;
  role?: string;
};
const SelectedUserData = (): JSX.Element => {
  const { params: { userId } }: MatchType = useRouteMatch();

  const [userData, setUserData] = React.useState<SelectedUserDataState | null>(null);
  const [userMessages, setUserMessages] = React.useState<UserMessageDataType[] | null>(null);

  const getAllDataUser = React.useCallback( async () => {
    const user = await axios.get(`${BACKEND_URL}/data-users/${userId}`);
    const messages = await axios.get(`${BACKEND_URL}/messages?userId=${userId}&_sort=dayId,currentHour&_order=asc`);

    setUserData(user.data);
    setUserMessages(messages.data);
  },[userId]);

  React.useEffect(() => {
    getAllDataUser();
  }, [getAllDataUser]);

  const handleUpdateRoleClick = (role: string) => {
    const updateDataUser = {
      ...userData,
      role,
    };
    axios
      .put(`${BACKEND_URL}/data-users/${userData!.id}`, updateDataUser)
      .then(() => {
        getAllDataUser();
      });
    console.log(
      `Смена роли пользователя ${userData!.email} с ${
        userData!.role
      } на ${role} с последующим запросом на обновленный лист users`
    );
  };

  return userMessages && userData ? (
    <React.Fragment>
      {/* Возможно нужно вынести в отдельный компонент и переписать логику запросов */}
      <div className="user-update">
        <div className="user-update__group">
          <h2 className="user-update-role__email">{userData.email}</h2>
          <div className="user-update-role__buttons">
            <button
              className={`button button__add ${
                userData.role === USER_ROLES.USER ? "button_selected" : ""
              }`}
              onClick={() => handleUpdateRoleClick(USER_ROLES.USER)}
            >
              {USER_ROLES.USER}
            </button>
            <button
              className={`button button__add ${
                userData.role === USER_ROLES.ADMIN ? "button_selected" : ""
              }`}
              onClick={() => handleUpdateRoleClick(USER_ROLES.ADMIN)}
            >
              {USER_ROLES.ADMIN}
            </button>
          </div>
        </div>
      </div>
      <Segment propsMessages={userMessages} />
    </React.Fragment>
  ) : (
    <Loading />
  );
};

export default SelectedUserData;
