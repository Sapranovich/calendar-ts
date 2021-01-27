import * as constants from "./usersConstants";
import * as actions from './usersActions';
import { IGetModelUser } from "../../services/getModelUser";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

type InitialSatateType = {
  isLoaded: boolean
  users: IGetModelUser[],
}

const initialState = {
  isLoaded: false,
  users: [],
};

export default function users(state = initialState, action: ActionTypes):InitialSatateType {
  switch (action.type) {
    case constants.SET_ALL_USERS:
      return {
        ...state,
        isLoaded: true,
        users: action.payload
      };
    default:
      return state;
  }
}
