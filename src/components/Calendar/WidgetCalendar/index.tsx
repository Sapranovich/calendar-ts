import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import * as CONSTANTS from "../../../constants";
import WidgetCellWeek from './WidgetCellWeek';
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";
import {setData, setAllStartDates} from '../../../redux/actions';
import monthData from '../../../services/monthData';
const WidgetCalendar = () => {
  const dispatch = useDispatch();

  const { basicDate, data } = useSelector((store: any) => store.calendar);

  const handlePrevMonthButtonClick = ()=>{
    const date = new Date(basicDate.getFullYear(), basicDate.getMonth() - 1);
    const currentDataCalendar = monthData(date.getFullYear(), date.getMonth())
    dispatch(setAllStartDates(date))
    dispatch(setData(currentDataCalendar))
  }
  const handleNextMonthButtonClick = ()=>{
    const date = new Date( basicDate.getFullYear(), basicDate.getMonth() + 1);
    const currentDataCalendar = monthData(date.getFullYear(), date.getMonth());
    dispatch(setAllStartDates(date))
    dispatch(setData(currentDataCalendar))
  }
  return (
    <div className="widget-calendar">
      <div className="calendar__header">
        <button onClick={handlePrevMonthButtonClick} className="button calendar__button">❮</button>
        <h3 className="calendar__title"> {CONSTANTS.MONTH_NAMES[basicDate.getMonth()]} {basicDate.getFullYear()}</h3>
        <button onClick={handleNextMonthButtonClick} className="button calendar__button">❯</button>
      </div>

      <div className="widget-calendar__list">
        <div className="calendar__header">
          {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (
            <span key={index} className="widget-calendar__day-name">
              {name}
            </span>
          ))}
        </div>
        {data.map((week: InitialStateDataType[], index: number) => (
          <WidgetCellWeek weekData={week} weekNumber={index} />
          
        ))}

      </div>
    </div>
  );
};

export default WidgetCalendar;