import * as constants from "./modalConstants";

export const openModal = () => {
  return {
    type: constants.OPEN_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: constants.CLOSE_MODAL,
  };
};
