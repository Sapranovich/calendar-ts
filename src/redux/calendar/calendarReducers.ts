import * as constants from "./calendarConstants";

export type InitialStateDataType = {
  date: Date;
  isCurrentMonth: boolean;
};

export type InitialStateType = {
  data: Array<InitialStateDataType[]> | null;
  currentDate: Date | null;
  basicDate: Date | null
  selectedDate: Date | null;
  selectedWeek: number | null;
  idSelectedDate: number | null;
};

const initialState: InitialStateType = {
  data: null,
  basicDate: null,
  currentDate: null,
  selectedWeek: null,
  selectedDate: null,
  idSelectedDate: null,
};

export default function calendar(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case constants.SET_ALL_START_DATES:
      return {
        ...state,
        currentDate: action.payload,
        basicDate: action.payload,
        selectedDate: action.payload,
        idSelectedDate: action.payload.getTime(),
      };
    case constants.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
        idSelectedDate: action.payload.getTime(),
      };
      case constants.SET_SELECTED_WEEK:
        return {
          ...state,
          selectedWeek: action.payload,
        };
    case constants.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
