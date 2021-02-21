import * as constants from "./modalConstants";
import * as actions from './modalActions';
import isEmpty from "../../services/isEmpty";
import { UserMessageDataType1 } from '../../types/messagesDataTypes';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type InitialStateType = {
  isOpenModal:boolean
  modalType:string | null
  modalData: UserMessageDataType1
}

const initialState = {
  isOpenModal: false,
  modalType: null,
  modalData: {}
};

export default function modal(state = initialState, action: ActionTypes):InitialStateType {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        modalType: action.payload
      };
    case constants.SET_MODAL_DATA:
      return {
        ...state,
        modalData: action.payload
      }  
    case constants.CLOSE_MODAL:
      return initialState
    default:
      return state;
  }
}
