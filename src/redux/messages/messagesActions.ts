import * as constants from './messagesConstants';
import axios from 'axios';
const URL_DB = "http://localhost:3001";
export const setAllMessages = (messages:any) => {
  return {
    type: constants.SET_ALL_MESSAGES,
    payload: messages
  
  }
};
export const requestAllMessages = () => (dispatch: any) => {
  axios.get(`${URL_DB}/messages`)
    .then(res => {
      const messages = res.data;
      dispatch(setAllMessages(messages))
    })
};


export const addMessage = () => (dispatch: any) => {
  return {
  
  }
};
export const updateMessage = () => (dispatch: any) => {
  return {
  
  }
};
export const deleteMessage = () => (dispatch: any) => {
  return {
  
  }
};
