import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../../../redux/actions";
import "./cellDay.scss";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";

interface CellDayPropsType extends RouteComponentProps<any> {
  dayData: InitialStateDataType;
}
const CellDay = ({history, dayData: { date, isCurrentMonth }}: CellDayPropsType) => {
  const dispatch = useDispatch();
  const handleTransitionClick = () => {
    console.log(date.getDate())
    dispatch(setSelectedDate(date));
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
        <div className="day__title">{date.getDate()}</div>
      </div>
      <div className="list day__list">
        <div className="list__item">Что-то записываем</div>
      </div>
    </div>
  );
};

export default withRouter(CellDay);
