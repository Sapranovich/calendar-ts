import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import * as CONSTANTS from "../../../constants";
import WidgetCellWeek from './WidgetCellWeek';
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";
import { updateDataMonth } from '../../../redux/actions';

const WidgetCalendar = () => {
  const dispatch = useDispatch();

  const { basicDate, data } = useSelector((store: any) => store.calendar);

  const handlePrevMonthButtonClick = ()=>{
    const date = new Date(basicDate.getFullYear(), basicDate.getMonth() - 1);
    dispatch(updateDataMonth(date));
  }
  const handleNextMonthButtonClick = ()=>{
    const date = new Date( basicDate.getFullYear(), basicDate.getMonth() + 1);
    dispatch(updateDataMonth(date));
  }
  return (
    <div className="widget-calendar border_bottom">
          <div className="widget-calendar__header border_bottom">
            <h3 className="widget-calendar__date">{CONSTANTS.MONTH_NAMES[basicDate.getMonth()]} {basicDate.getFullYear()}</h3>
            <div className="widget-calendar__buttons">
              <button className="widget-calendar__button" onClick={handlePrevMonthButtonClick}>❮</button>
              <button className="widget-calendar__button" onClick={handleNextMonthButtonClick}>❯</button>
            </div>
          </div>
          <div className="widget-calendar__list border_bottom">
            <div className="widget-calendar__list-header">
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