import * as constants from "./usersConstants";
const initialState = {
  isLoaded: false,
  users: [],
};

export default function users(state = initialState, action: any) {
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
