import isEmpty from '../../services/isEmpty';

import { SetAllMessagesActionType } from './messagesActions';
import { MessagesSpecificDateType, UserMessageDataType1 } from '../../types/messagesDataTypes';

import * as constants from './messagesConstants';

export type InitialStateType = {
  isNoMessages: boolean
  isLoadedMessages: boolean
  messages: UserMessageDataType1[]
};
const initialState = {
  isNoMessages: false,
  isLoadedMessages: false,
  messages: [],
};

export default function messages(state = initialState, action: SetAllMessagesActionType): InitialStateType {
  switch (action.type) {
    case constants.SET_ALL_MESSAGES:
      return {
        ...state,
        isNoMessages: isEmpty(action.payload),
        isLoadedMessages: true,
        messages: action.payload
      }
    default:
      return state;
  }
}
