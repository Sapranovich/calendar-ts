import React from "react";
import * as CONSTANTS from "../constants.js";

import currentMonthData from '../services/calendarServices';

import {ICalendarProps} from '../interfaces/basicInterfaces';

function Calendar({ store, setStore }:ICalendarProps) {
  const { currentDate, calendarDate, selectedDate } = store;

  const handlePrevMonthButtonClick = () => {
    const date = new Date( calendarDate.getFullYear(), calendarDate.getMonth() - 1);
    setStore({ 
      ...store, 
      calendarDate: date 
    });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date( calendarDate.getFullYear(), calendarDate.getMonth() + 1);
    setStore({ 
      ...store, 
      calendarDate: date 
    });
  };

  const handleDayCellClick = (date: Date) => {
    setStore({ 
      ...store, 
      selectedDate: date, 
      idSelectedDate: date.getTime() });
  };

  return (
    <div className="calendar app__calendar">

      <div className="calendar__header">
        <button onClick={handlePrevMonthButtonClick} className="button calendar__button">❮</button>
        <h3 className="calendar__title"> {CONSTANTS.MONTH_NAMES[calendarDate.getMonth()]} {calendarDate.getFullYear()}</h3>
        <button onClick={handleNextMonthButtonClick} className="button calendar__button">❯</button>
      </div>

      <div className="calendar__list calendar__list_decor">

        <div className="calendar__row">
          {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (<span key={index} className="calendar__row-cell calendar__row-cell_remove-hover">{name}</span> ))}
        </div>

        {currentMonthData(calendarDate.getFullYear(), calendarDate.getMonth()).map((week:Array<Date | null>, index:number) => (
          <div key={index} className="calendar__row">
            {week.map((date, index:number) =>
              date ? (
                <span key={index} 
                  onClick={() => handleDayCellClick(date)} 
                  className={`calendar__row-cell 
                    ${currentDate.getTime() === date.getTime() ? "calendar__row-cell_current": ''}
                    ${selectedDate.getTime() === date.getTime() ? "calendar__row-cell_selected": ''}`}>{date.getDate()}</span>
              ) : (
                <span key={index} className="calendar__row-cell calendar__row-cell_empty"></span>
              )
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Calendar;
