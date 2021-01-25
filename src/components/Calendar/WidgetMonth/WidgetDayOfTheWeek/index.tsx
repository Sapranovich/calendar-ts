import React from "react";
import { withRouter, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { DayOfTheWeekPropsType } from "../../Month/DayOfTheWeek";
import { updateSelectedDate } from "../../../../redux/actions";

const WidgetDayOfTheWeek = ({
  history,
  dayData: { date, isCurrentMonth },
}: DayOfTheWeekPropsType) => {
  const {path} = useRouteMatch();
  const dispatch = useDispatch();
  const { selectedDate, currentDate } = useSelector(
    (store: any) => store.calendar
  );
  const isCurrentDate = currentDate.getTime() === date.getTime();
  const isSelectedDate = selectedDate && selectedDate.getTime() === date.getTime();
  
  const handleSelectedDateClick =()=>{
    dispatch(updateSelectedDate(date))
    history.push(`${path}/day`);
  }
  return (
    <div
      className={`widget-month__day 
      ${!isCurrentMonth ? "widget-month__day_shadowed" : ""} 
      ${isCurrentDate ? "widget-month__day_current" : ""}
      ${isSelectedDate ? "widget-month___selected" : ""}`}
      onClick={handleSelectedDateClick}
    >
      <span className="widget-month__day__number">{date.getDate()}</span>
    </div>
  );
};

export default withRouter(WidgetDayOfTheWeek);