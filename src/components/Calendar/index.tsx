import React from "react";
import * as CONSTANTS from "../../constants";
import { useDispatch, useSelector } from "react-redux";

import { InitialStateDataType } from "../../redux/calendar/calendarReducers";

import "./calendar.scss";
import monthData from "../../services/monthData";
import CellWeek from "./CellWeek";


function Calendar() {
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
    <div className="calendar">
      {/* <div className="calendar__header">
        <button onClick={handlePrevMonthButtonClick} className="button calendar__button">❮</button>
        <h3 className="calendar__title"> {CONSTANTS.MONTH_NAMES[calendarDate.getMonth()]} {calendarDate.getFullYear()}</h3>
        <button onClick={handleNextMonthButtonClick} className="button calendar__button">❯</button>
      </div> */}

      <div className="calendar__list">
        <div className="calendar__header">
          {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (
            <span key={index} className="calendar__day-name">
              {name}
            </span>
          ))}
        </div>
        {data.map((week: InitialStateDataType[], index: number) => (
          <CellWeek  weekData={week} weekNumber={index} />
        ))}

      </div>
    </div>
  );
}

export default Calendar;
