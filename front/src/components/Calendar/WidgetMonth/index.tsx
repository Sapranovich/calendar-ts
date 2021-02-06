import React from "react";
import { useSelector } from "react-redux";

import IStore from "../../../redux/interfaceStore";
import { DayDataType } from "../../../redux/calendar/calendarReducer";
import WidgetWeekOfTheMonth from "./WidgetWeekOfTheMonth";
import MonthToggle from "../MonthToggle";

import { MONTH_NAMES, WEEK_DAY_NAMES } from '../../../data';

const WidgetMonth = (): JSX.Element => {
  const { basicDate, data } = useSelector((store: IStore) => store.calendar);

  return (
    <div className="widget-month border_bottom">
      <div className="widget-month__header border_bottom">
        <h3 className="widget-month__date">
          {MONTH_NAMES[basicDate!.getMonth()]}{" "}
          {basicDate!.getFullYear()}
        </h3>
        <MonthToggle />
      </div>
      <div className="widget-month__list border_bottom">
        <div className="widget-month__list-header">
          {WEEK_DAY_NAMES.map((name: string, index: number) => (
            <span key={index} className="widget-month__day-name">
              {name}
            </span>
          ))}
        </div>
        {data!.map((weekData: DayDataType[], index: number) => (
          <WidgetWeekOfTheMonth
            key={index}
            weekData={weekData}
            weekNumber={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetMonth;
