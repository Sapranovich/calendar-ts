import * as constants from "./modalConstants";
import * as actions from './modalActions';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

type InitialStateType = {
  isOpenModal:boolean
}

const initialState = {
  isOpenModal: false,
};

export default function modal(state = initialState, action: ActionTypes):InitialStateType {
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
