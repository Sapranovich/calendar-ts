import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { UserMessageDataType, MessagesSpecificDateType } from "../../types/messagesDataTypes";
import IStore from "../interfaceStore";

import * as constants from "./messagesConstants";
import * as CONSTANTS from "../../constants";

export type SetAllMessagesActionType = {
  type: typeof constants.SET_ALL_MESSAGES;
  payload: MessagesSpecificDateType[];
};
export const setAllMessages = (messages: MessagesSpecificDateType[]): SetAllMessagesActionType => {
  return {
    type: constants.SET_ALL_MESSAGES,
    payload: messages,
  };
};

export const requestAllMessages = (): ThunkAction<void, IStore, unknown, Action<string>> => (dispatch) => {
  // axios.get(`${CONSTANTS.BACKEND_URL}/messages?_sort=id&_order=asc`) сортировка в обратном порядке
  axios
    .get(`${CONSTANTS.BACKEND_URL}/messages?_sort=id&_order=desc`)
    .then((res) => {
      const messages = res.data;
      dispatch(setAllMessages(messages));
    });
};

export const addMessage = (userMessageData: UserMessageDataType, idSelectedDate: number): ThunkAction<void, IStore, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${CONSTANTS.BACKEND_URL}/messages/${idSelectedDate}`)
    .then((res) => {
      const data = res.data;
      const index = data.find((message: UserMessageDataType) => message.currentHour === userMessageData.currentHour).id;
      if (index) {
        data.messages[index] = userMessageData;
      } else {
        data.messages.push(userMessageData);
      }
      axios.post(`${CONSTANTS.BACKEND_URL}/messages`, data);
    })
    .catch(() => {
      const data = {
        id: idSelectedDate,
        messages: [userMessageData],
      };
      axios
        .post(`${CONSTANTS.BACKEND_URL}/messages`, data)
        .then((res) => console.log(res));
    })
    .then(() => {
      dispatch(requestAllMessages());
    });
};
