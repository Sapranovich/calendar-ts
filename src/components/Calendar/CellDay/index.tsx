import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSelectedDate } from "../../../redux/actions";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";

export interface CellDayPropsType extends RouteComponentProps<any> {
  dayData: InitialStateDataType;
}
const CellDay = ({history, dayData: { date, isCurrentMonth }}: CellDayPropsType) => {
  const dispatch = useDispatch();
  const handleTransitionClick = () => {
    console.log(date.getDate())
    dispatch(updateSelectedDate(date));
    history.push(`/calendar/day/${date.getTime()}`)
  };
  return (
    <div className="day">
      <div
        className={`day__header ${
          isCurrentMonth ? "day__header_active" : "day__header_passive"
        }`}
        onClick={handleTransitionClick}
      >
        <div className="day__number">{date.getDate()}</div>
      </div>
      <ul className="day__tasks">
                <li className="day__task"> заметка </li>
                <li className="day__task">заметка</li>
                <li className="day__task">заметка</li>
                <li className="day__task">заметка</li>
              </ul>
    </div>
  );
};

export default withRouter(CellDay);
