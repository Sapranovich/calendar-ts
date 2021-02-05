import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import UserItem from "./UserItem";
import { ModelUserType } from "../../services/getModelUser";
import IStore from "../../redux/interfaceStore";

import * as CONSTANTS from "../../constants";

const UsersList = (): JSX.Element => {
  const { id } = useSelector((store: IStore) => store.auth.user);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [listUsers, setListUsers] = React.useState<ModelUserType[]>([]);

  const setAllUsers = React.useCallback(() => {
    axios
      .get(`${CONSTANTS.BACKEND_URL}/data-users/?id_ne=${id}`)
      .then((res) => {
        const listUsers = res.data;
        setListUsers(listUsers);
        setIsLoaded(true);
      });
  }, [id]);

  React.useEffect(() => {
    setAllUsers();
  }, [setAllUsers]);

  return (
    <div className="users-list">
      <h2 className="users-list__title border_bottom">All users</h2>
      {isLoaded ? (
        <ul className="users-list__users border_bottom">
          {listUsers.map((user: ModelUserType, index: number) => (
            <UserItem key={index} user={user} setAllUsers={setAllUsers} />
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default UsersList;
