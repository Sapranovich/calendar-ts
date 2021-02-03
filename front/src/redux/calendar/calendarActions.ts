import * as constants from "./calendarConstants";

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

type SetCurrentHourActionType = {
  type: typeof constants.SET_CURRENT_HOUR;
  payload: number | null;
};
export function setCurrentHour (currentHour: number | null):SetCurrentHourActionType{
  return {
    type: constants.SET_CURRENT_HOUR,
    payload: currentHour,
  };
}

type UpdateSelectedDateActionType = {
  type: typeof constants.UPDATE_SELECTED_DATE;
  payload: Date;
};
export function updateSelectedDate(date: Date): UpdateSelectedDateActionType {
  return {
    type: constants.UPDATE_SELECTED_DATE,
    payload: date,
  };
}

type UpdateDataMonthActionType = {
  type: typeof constants.UPDATE_DATA_MONTH;
  payload: Date;
};
export function updateDataMonth(date:Date):UpdateDataMonthActionType{
  return{
    type: constants.UPDATE_DATA_MONTH,
    payload: date
  }
}