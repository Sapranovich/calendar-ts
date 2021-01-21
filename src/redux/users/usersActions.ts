import * as constants from './usersConstants';
import axios from 'axios';

const URL_DB = "http://localhost:3001";
export const allUsers = ()=>(dispatch:any)=>{
    axios.get(`${URL_DB}/users`)
    .then(res=> {
      const allUsers  = res.data;
      dispatch(setAllUsers(allUsers))
    })
}
export const setAllUsers = (arrayUsers:any)=>{
  return {
    type: constants.SET_ALL_USERS,
    payload: arrayUsers
  }
}


