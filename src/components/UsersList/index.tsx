import React from "react";
import UserItem from './UserItem';
const UsersList = () => {
  return (
    <div className="user-list">
      <UserItem/>
      <UserItem/>
      <UserItem/>
      <UserItem/>
    </div>
  );
};

export default UsersList;