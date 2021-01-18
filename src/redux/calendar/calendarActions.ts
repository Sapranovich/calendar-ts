import * as constants from "./calendarConstants";
import { InitialStateDataType } from "./calendarReducers";

type SetAllStartDatesActionType = {
  type: typeof constants.SET_ALL_START_DATES;
  payload: Date;
};

export function setAllStartDates(date: Date): SetAllStartDatesActionType {
  return {
    type: constants.SET_ALL_START_DATES,
    payload: date,
  };
}

type SetSelectedDateActionType = {
  type: typeof constants.SET_SELECTED_DATE;
  payload: Date;
};

export function setSelectedDate(date: Date): SetSelectedDateActionType {
  return {
    type: constants.SET_SELECTED_DATE,
    payload: date,
  };
}

type SetSelectedWeekActionType = {
  type: typeof constants.SET_SELECTED_WEEK;
  payload: number;
};

export function setSelectedWeek(value: number): SetSelectedWeekActionType {
  return {
    type: constants.SET_SELECTED_WEEK,
    payload: value,
  };
}

type SetDataActionType = {
  type: typeof constants.SET_DATA;
  payload: Array<InitialStateDataType[]>;
};

export function setData(data: Array<InitialStateDataType[]>): SetDataActionType {
  return {
    type: constants.SET_DATA,
    payload: data,
  };
}
