import React from "react";
import {useSelector} from 'react-redux';
import * as CONSTANTS from "../../../constants";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";
import WidgetWeekOfTheMonth from './WidgetWeekOfTheMonth';
import MonthToggle from '../MonthToggle';

const WidgetMonth = () => {
  const { basicDate, data } = useSelector((store: any) => store.calendar);

  return (
    <div className="widget-month border_bottom">
          <div className="widget-month__header border_bottom">
            <h3 className="widget-month__date">{CONSTANTS.MONTH_NAMES[basicDate.getMonth()]} {basicDate.getFullYear()}</h3>
            <MonthToggle />
          </div>
          <div className="widget-month__list border_bottom">
            <div className="widget-month__list-header">
            {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (
            <span key={index} className="widget-month__day-name">
              {name}
            </span>
          ))}
            </div>
            {data.map((week: InitialStateDataType[], index: number) => (
          <WidgetWeekOfTheMonth weekData={week} weekNumber={index} />
          
        ))}
            </div>
          </div>
  );
};

export default WidgetMonth;