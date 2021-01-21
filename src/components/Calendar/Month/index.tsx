import React from "react";
import * as CONSTANTS from "../../../constants";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";
import { useSelector } from 'react-redux';
import WeekOfTheMonth from './WeekOfTheMonth';
function Month() {
  const { currentDate, data } = useSelector((store: any) => store.calendar);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
  };

  const handleDayCellClick = () => {};
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
        <WeekOfTheMonth weekData={week} weekNumber={index} />
      ))}
    </div>
  );
}
export default Month;
