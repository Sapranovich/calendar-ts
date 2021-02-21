import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { ModelUserType } from "../../../services/getModelUser";

const UserItem = ({ user }: { user: ModelUserType }): JSX.Element => {
  const { path } = useRouteMatch();

  console.log(path)

  return (
    <li className={`user user_decor-${user.role}`}>
      <Link to={`${path}/user-data/${user.id}`}>
        <h4 className="user__email">{user.email}</h4>
      </Link>
    </li>
  );
};

export default UserItem;
