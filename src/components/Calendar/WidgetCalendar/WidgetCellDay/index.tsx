import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CellDayPropsType } from "../../CellDay";
import { updateSelectedDate } from "../../../../redux/actions";

const WidgetCellDay = ({
  history,
  dayData: { date, isCurrentMonth },
}: CellDayPropsType) => {
  const dispatch = useDispatch();
  const { selectedDate, currentDate } = useSelector(
    (store: any) => store.calendar
  );
  const isCurrentDate = currentDate.getTime() === date.getTime();
  const isSelectedDate = selectedDate && selectedDate.getTime() === date.getTime();
  
  const handleSelectedDateClick =()=>{
    dispatch(updateSelectedDate(date))
  }
  return (
    <div
      className={`widget-day 
      ${!isCurrentMonth ? "widget-day_shadowed" : ""} 
      ${isCurrentDate ? "widget-day_current" : ""}
      ${isSelectedDate ? "widget-day_selected" : ""}`}
      onClick={handleSelectedDateClick}
    >
      <span className="widget-day__number">{date.getDate()}</span>
    </div>
  );
};

export default withRouter(WidgetCellDay);
