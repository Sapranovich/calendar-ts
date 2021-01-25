import * as constants from "./calendarConstants";
import * as actions from "./calendarActions";
import monthData from "../../services/monthData";

export type InitialStateDataType = {
  date: Date;
  isCurrentMonth: boolean;
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type InitialStateType = {
  data: Array<InitialStateDataType[]> | null;
  currentDate: Date | null;
  currentHour:number | null,
  basicDate: Date | null;
  selectedDate: Date | null;
  selectedWeek: number | null;
  idSelectedDate: number | null;
};

const initialState: InitialStateType = {
  data: null,
  basicDate: null,
  currentDate: null,
  currentHour:null,
  selectedWeek: null,
  selectedDate: null,
  idSelectedDate: null,
};

export default function calendar(state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case constants.SET_ALL_START_DATES:
      return {
        ...state,
        data: monthData(action.payload.getFullYear(), action.payload.getMonth()),
        currentDate: action.payload,
        basicDate: action.payload,
      };
    case constants.UPDATE_DATA_MONTH:
      return {
        ...state,
        data: monthData(
          action.payload.getFullYear(),
          action.payload.getMonth()
        ),
        basicDate: action.payload,
      };
      case constants.SET_CURRENT_HOUR:
      return {
        ...state,
        currentHour: action.payload
      };
    case constants.UPDATE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
        idSelectedDate: action.payload.getTime(),
      };
    // case constants.CLEAR_DATES:
    //   return initialState;
    default:
      return state;
  }
}
