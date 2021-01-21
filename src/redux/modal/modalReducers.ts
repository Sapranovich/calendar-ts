import * as constants from "./modalConstants";
const initialState = {
  isOpenModal: false,
  currentHour: null,
};

export default function modal(state = initialState, action: any) {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true
      };
    case constants.CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false
      };
    default:
      return state;
  }
}
