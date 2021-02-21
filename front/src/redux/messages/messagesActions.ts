import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { UserMessageDataType1 } from "../../types/messagesDataTypes";
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

export const requestAllMessages = (userId:number): ThunkAction<void, IStore, unknown, Action<string>> => (dispatch) => {
  // axios.get(`${BACKEND_URL}/messages?_sort=id&_order=asc`) сортировка в обратном порядке
    axios
    .get(`${BACKEND_URL}/messages?userId=${userId}&_sort=dayId,currentHour&_order=asc`)
    .then((res) => {
      const messages = res.data;
      dispatch(setAllMessages(messages));
    });
};

