import React from "react";
import * as CONSTANTS from "../../../constants";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";
import { useSelector } from 'react-redux';
import WeekOfTheMonth from './WeekOfTheMonth';
function Month() {
  const { data } = useSelector((store: any) => store.calendar);

  return (
    <div className="month-list">
      <div className="month-list__header">
        {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (
          <span key={index} className="month-list__day-name">
            {name}
          </span>
        ))}
      </div>
      {data.map((week: InitialStateDataType[], index: number) => (
        <WeekOfTheMonth key={index} weekData={week} weekNumber={index} />
      ))}
    </div>
  );
}
export default Month;
