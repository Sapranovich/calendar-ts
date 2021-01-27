import * as constants from "./modalConstants";


type OpenModalActionType = {
  type: typeof constants.OPEN_MODAL
};
export const openModal = ():OpenModalActionType => {
  return {
    type: constants.OPEN_MODAL,
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
