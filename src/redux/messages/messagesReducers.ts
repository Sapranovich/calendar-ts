import * as constants from './messagesConstants';
import isEmpty from '../../services/isEmpty';
import { IUserMessageData } from './messagesActions';

export type InitialStateDataType = {
  isNoMessages: boolean
  isLoadedMessages: boolean
  messages: IUserMessageData[]
};
const initialState = {
  isNoMessages: false,
  isLoadedMessages: false,
  messages: [],
};

export default function messages(state = initialState, action: any):InitialStateDataType {
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
