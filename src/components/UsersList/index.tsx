import React from "react";
import UserItem from "./UserItem";
import { allUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const UsersList = () => {
  const { users, isLoaded } = useSelector((store: any) => store.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <div className="list">
      <h3 className="list__title border_bottom">All users</h3>
      {isLoaded ? (
        <ul className="list__users">
          {users.map((user: any, index: number) => (
            <UserItem user={user} />
          ))}
        </ul>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
};

export default UsersList;
