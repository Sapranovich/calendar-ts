import * as constants from "./modalConstants";
import { UserMessageDataType1 } from '../../types/messagesDataTypes';
type OpenModalActionType = {
  type: typeof constants.OPEN_MODAL
  payload: string
};
export const openModal = (modalType: string):OpenModalActionType => {
  return {
    type: constants.OPEN_MODAL,
    payload: modalType
  };
};

type SetModalDataActionType = {
  type: typeof constants.SET_MODAL_DATA
  payload: UserMessageDataType1
};
export const setModalData = (modalData: UserMessageDataType1): SetModalDataActionType => {
  return {
    type: constants.SET_MODAL_DATA,
    payload: modalData
  }
};

type CloseModalActionType = {
  type: typeof constants.CLOSE_MODAL
};
export const closeModal = ():CloseModalActionType => {
  return {
    type: constants.CLOSE_MODAL,
  };
};
