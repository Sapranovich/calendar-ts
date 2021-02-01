import React from "react";
import UserItem from "./UserItem";
import *as CONSTANTS from '../../constants';
import {IGetModelUser} from '../../services/getModelUser';
import { useSelector } from "react-redux";
import axios from 'axios';

const UsersList = () => {
  const {id, role} = useSelector((store:any)=> store.auth.user)
  const [isLoaded, setIsLoaded] =React.useState(false);
  const [listUsers, setListUsers] = React.useState<IGetModelUser[]>([]);
  // const { users, isLoaded } = useSelector((store: any) => store.users);
  // const dispatch = useDispatch();
  
  React.useEffect(() => {
    // Скорее всего нужно перенести в redux, так как сложно взаимодействовать из UserItem, так как при изменении роли нужно обновить ввесь лист
    if(role === CONSTANTS.BASIC_ROLES.ADMIN){
      axios.get(`${CONSTANTS.BACKEND_URL}/data-users/?id_ne=${id}`)
      .then((res)=>{
        const listUsers = res.data;
        setListUsers(listUsers)
        setIsLoaded(true);
      })
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
        <div>Загрузка...</div>
      )}
    </div>
  );
};

export default UsersList;

