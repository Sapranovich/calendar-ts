import React from "react";

const UserItem = ({user}:{user:any}) => {
  return (
    <li className=" user">
      <h4 className="user__email">{user.email}</h4>
    </li>
  );
};

export default UserItem;
