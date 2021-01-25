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

// type SetSelectedWeekActionType = {
//   type: typeof constants.SET_SELECTED_WEEK;
//   payload: number;
// };
// export function setSelectedWeek(value: number): SetSelectedWeekActionType {
//   return {
//     type: constants.SET_SELECTED_WEEK,
//     payload: value,
//   };
// }

// type SetDataActionType = {
//   type: typeof constants.SET_DATA_MONTH;
//   payload: Array<InitialStateDataType[]>;
// };

// export function setDataMonth(
//   data: Array<InitialStateDataType[]>
// ): SetDataActionType {
//   return {
//     type: constants.SET_DATA_MONTH,
//     payload: data,
//   };
// }

// export const updateDataViewCalendar = (date: Date) => (dispatch: any) => {
//   dispatch(updateDataMonth(date));
// };
