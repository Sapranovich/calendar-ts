import React, { ButtonHTMLAttributes } from "react";
import { IGetModelUser } from "../../../services/getModelUser";
import axios from 'axios';
const UserItem = ({ user }: { user: IGetModelUser }) => {
  const [isVisibleButttons, setIsVisibleButttons] = React.useState(false);

  const handleUpdateRoleClick = (role:string) => {
    
      console.log(`Смена роли пользователя ${user.email} с ${user.role} на ${role} с последующим запросом на обновленный лист users`)
  };

  return (
    <li className={`user user_decor-${user.role}`} onClick= {() => setIsVisibleButttons(!isVisibleButttons)}>
      <h4 className="user__email">{user.email}</h4>
      {isVisibleButttons && <div className="user__buttons">
        <button className={`user__button ${user.role ==='user'? "disabled":""}`} onClick={()=>handleUpdateRoleClick('user')}>user</button>
        <button className={`user__button ${user.role ==='viewer'? "disabled":""}`} onClick={()=>handleUpdateRoleClick('viewer')}>viewer</button>
      </div>}
    </li>
  );
};

export default UserItem;
