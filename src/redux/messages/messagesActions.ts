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


export interface IUserMessageDataProps{
  userId:number,
  message: string,
  currentHour:number,
  email: string,
  role: string        
}

export interface IUserMessageData{
  id: number
  messages:IUserMessageDataProps[]
}


export const addMessage = (userMessageData:IUserMessageDataProps, idSelectedDate:number)=> (dispatch:any) => {
  axios.get(`${URL_DB}/messages/${idSelectedDate}`)
  .then(res=> {
    const data = res.data;
    const index =  data.find((message:IUserMessageDataProps) => message.currentHour === userMessageData.currentHour).id;
    if(index){
      data.messages[index] = userMessageData;
    }else{
      data.messages.push(userMessageData)
    }
    axios.post(`${URL_DB}/messages`, data)
  })
  .catch(()=> {
    const data = {
      id: idSelectedDate,
      messages:[userMessageData]
    }
    axios.post(`${URL_DB}/messages`, data).then(res=>console.log(res))
  }).then(()=>{
    dispatch(requestAllMessages())
  })
    // .then(res => {
      // const messages = res.data;
      // if (!messages.hasOwnProperty(idSelectedDate)) {
      //   messages[idSelectedDate] = Array(24).fill(undefined);
      // }

    // })
  // if (!store.hasOwnProperty(key)) {
  //   store[key] = Array(CONSTANTS.HOURS_DAY).fill(undefined);
  // }
  // store[key][hour] = data ? data : undefined;
  // axios.post(`${URL_DB}/messages`)
};
export const updateMessage = () => (dispatch: any) => {
  return {
  
  }
};
export const deleteMessage = () => (dispatch: any) => {
  return {
  
  }
};
