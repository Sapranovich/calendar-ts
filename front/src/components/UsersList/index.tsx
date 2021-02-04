import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import UserItem from "./UserItem";
import { IGetModelUser } from "../../services/getModelUser";
import IStore from "../../redux/interfaceStore";

import * as CONSTANTS from "../../constants";

const UsersList = (): JSX.Element => {
  const { id, role } = useSelector((store: IStore) => store.auth.user);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [listUsers, setListUsers] = React.useState<IGetModelUser[]>([]);

  React.useEffect(() => {
    // Скорее всего нужно перенести в redux, так как сложно взаимодействовать из UserItem, так как при изменении роли нужно обновить ввесь лист
    if (role === CONSTANTS.BASIC_ROLES.ADMIN) {
      axios
        .get(`${CONSTANTS.BACKEND_URL}/data-users/?id_ne=${id}`)
        .then((res) => {
          const listUsers = res.data;
          setListUsers(listUsers);
          setIsLoaded(true);
        });
      // .catch((e)=> console.log)
    }
    // dispatch(allUsers());
  }, []);

  return (
    <div className="users-list">
      <h2 className="users-list__title border_bottom">All users</h2>
      {isLoaded ? (
        <ul className="users-list__users border_bottom">
          {listUsers.map((user: IGetModelUser, index: number) => (
            <UserItem key={index} user={user} />
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default UsersList;
