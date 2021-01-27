import * as constants from './messagesConstants';
import * as CONSTANTS from '../../constants';
import axios from 'axios';

export const setAllMessages = (messages:Array<IUserMessageDataProps | null>) => {
  return {
    type: constants.SET_ALL_MESSAGES,
    payload: messages
  
  }
};
export const requestAllMessages = () => (dispatch: any) => {
  axios.get(`${CONSTANTS.BACKEND_URL}/messages`)
    .then(res => {
      const messages = res.data;
      dispatch(setAllMessages(messages))
    })
};

export interface IUserMessageDataProps{
  userId:number,
  message: string,
  currentHour:number,
  email: string,
  role: string        
}

export interface IUserMessageData{
  id: number
  messages:Array<IUserMessageDataProps | null>
}


export const addMessage = (userMessageData:IUserMessageDataProps, idSelectedDate:number)=> (dispatch:any) => {
  axios.get(`${CONSTANTS.BACKEND_URL}/messages/${idSelectedDate}`)
  .then(res=> {
    const data = res.data;
    const index =  data.find((message:IUserMessageDataProps) => message.currentHour === userMessageData.currentHour).id;
    if(index){
      data.messages[index] = userMessageData;
    }else{
      data.messages.push(userMessageData)
    }
    axios.post(`${CONSTANTS.BACKEND_URL}/messages`, data)
  })
  .catch(()=> {
    const data = {
      id: idSelectedDate,
      messages:[userMessageData]
    }
    axios.post(`${CONSTANTS.BACKEND_URL}/messages`, data).then(res=>console.log(res))
  }).then(()=>{
    dispatch(requestAllMessages())
  })
};

//  Возможно это не понядобится ...
export const updateMessage = () => (dispatch: any) => {
  return {
  
  }
};
export const deleteMessage = () => (dispatch: any) => {
  return {
  
  }
};
