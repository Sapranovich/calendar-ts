import * as constants from './messagesConstants';
import isEmpty from '../../services/isEmpty';


const initialState = {
  isNoMessages: false,
  isLoadedMessages: false,
  messages: {},
};

export default function messages(state = initialState, action: any) {
  switch (action.type) {
    case constants.SET_ALL_MESSAGES:
      return {
        ...state,
        isNoMessages: isEmpty(action.payload),
        isLoadedMessages: true,
        messages: action.payload
      }
      case constants.ADD_MESSAGE:
      return {
        
      }
      case constants.UPDATE_MESSAGE:
      return {
        
      }
      case constants.DELETE_MESSAGE:
      return {
        
      }
    default:
      return state;
  }
}
