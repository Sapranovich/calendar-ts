import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { UserMessageDataType, MessagesSpecificDateType, UserMessageDataType1 } from "../../types/messagesDataTypes";
import IStore from "../interfaceStore";

import * as constants from "./messagesConstants";
import { BACKEND_URL } from '../../data';

export type SetAllMessagesActionType = {
  type: typeof constants.SET_ALL_MESSAGES;
  payload: UserMessageDataType1[];
};
export const setAllMessages = (messages: UserMessageDataType1[]): SetAllMessagesActionType => {
  return {
    type: constants.SET_ALL_MESSAGES,
    payload: messages,
  };
};

export const requestAllMessages = (): ThunkAction<void, IStore, unknown, Action<string>> => (dispatch) => {
  // axios.get(`${BACKEND_URL}/messages?_sort=id&_order=asc`) сортировка в обратном порядке
  axios
    .get(`${BACKEND_URL}/messages?_sort=currentHour&_order=asc`)
    .then((res) => {
      const messages = res.data;
      dispatch(setAllMessages(messages));
    });
};

export const addMessage = (userMessageData: UserMessageDataType, idSelectedDate: number): ThunkAction<void, IStore, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${BACKEND_URL}/messages/${idSelectedDate}`)
    .then((res) => {
      const data = res.data;
      const index = data.find((message: UserMessageDataType) => message.currentHour === userMessageData.currentHour).id;
      if (index) {
        data.messages[index] = userMessageData;
      } else {
        data.messages.push(userMessageData);
      }
      axios.post(`${BACKEND_URL}/messages`, data);
    })
    .catch(() => {
      const data = {
        id: idSelectedDate,
        messages: [userMessageData],
      };
      axios
        .post(`${BACKEND_URL}/messages`, data)
        .then((res) => console.log(res));
    })
    .then(() => {
      dispatch(requestAllMessages());
    });
};
