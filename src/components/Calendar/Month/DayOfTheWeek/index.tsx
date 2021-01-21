import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSelectedDate } from "../../../../redux/actions";
import { InitialStateDataType } from "../../../../redux/calendar/calendarReducers";

export interface DayOfTheWeekPropsType extends RouteComponentProps<any> {
  dayData: InitialStateDataType;
}
const DayOfTheWeek = ({
  history,
  dayData: { date, isCurrentMonth },
}: DayOfTheWeekPropsType) => {
  const dispatch = useDispatch();
  const handleTransitionClick = () => {
    dispatch(updateSelectedDate(date));
    history.push(`/calendar/day/${date.getTime()}`);
  };
  return (
    <div className="month-list__day">
      <div
        className={`month-list__day-header ${
          isCurrentMonth
            ? "month-list__day-header_active"
            : "month-list__day-header_passive"
        }`}
        onClick={handleTransitionClick}
      >
        <div className="month-list__day-number">{date.getDate()}</div>
      </div>
      <ul className="month-list__day-tasks">
        <li className="month-list__day-task"> заметка </li>
        <li className="month-list__day-task">заметка</li>
      </ul>
    </div>
  );
};

export default withRouter(DayOfTheWeek);
