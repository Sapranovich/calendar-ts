import * as constants from "./modalConstants";


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

type CloseModalActionType = {
  type: typeof constants.CLOSE_MODAL
};
export const closeModal = ():CloseModalActionType => {
  return {
    type: constants.CLOSE_MODAL,
  };
};
