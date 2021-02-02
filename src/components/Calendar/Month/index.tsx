import React from "react";
import { useSelector } from 'react-redux';

import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";
import WeekOfTheMonth from './WeekOfTheMonth';

import * as CONSTANTS from "../../../constants";
const Month = (): JSX.Element => {
  const { data } = useSelector((store: any) => store.calendar);
  
  return (
    <div className="month-list">
      <div className="month-list__header border_bottom">
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
