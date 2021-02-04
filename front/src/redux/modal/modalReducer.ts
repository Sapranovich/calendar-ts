import * as constants from "./modalConstants";
import * as actions from './modalActions';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type InitialStateType = {
  isOpenModal:boolean
  modalType:string | null
}

const initialState = {
  isOpenModal: false,
  modalType: null
};

export default function modal(state = initialState, action: ActionTypes):InitialStateType {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        modalType: action.payload
      };
    case constants.CLOSE_MODAL:
      return initialState
    default:
      return state;
  }
}
