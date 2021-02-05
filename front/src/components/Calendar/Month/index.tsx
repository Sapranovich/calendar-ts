import React from "react";
import { useSelector } from 'react-redux';

import IStore from "../../../redux/interfaceStore";
import { DayDataType } from "../../../redux/calendar/calendarReducer";
import WeekOfTheMonth from './WeekOfTheMonth';

import * as CONSTANTS from "../../../constants";
const Month = (): JSX.Element => {
  const { data } = useSelector((store: IStore) => store.calendar);
  
  return  (
    <div className="month-list">
      <div className="month-list__header border_bottom">
        {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (
          <span key={index} className="month-list__day-name">
            {name}
          </span>
        ))}
      </div>
      {data?.map((week: DayDataType[], index: number) => (
        <WeekOfTheMonth key={index} weekData={week} weekNumber={index} />
      ))}
    </div>
  );
}
export default Month;
