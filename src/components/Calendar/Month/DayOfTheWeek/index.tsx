import React from "react";
import { RouteComponentProps, withRouter, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDate } from "../../../../redux/actions";
import { InitialStateDataType } from "../../../../redux/calendar/calendarReducers";
import getTimeInFormat from '../../../../services/getTimeInFormat';

export interface DayOfTheWeekPropsType extends RouteComponentProps<any> {
  dayData: InitialStateDataType;
}
const DayOfTheWeek = ({history,dayData: { date, isCurrentMonth }}:DayOfTheWeekPropsType) => {
  const {messages} = useSelector((store:any)=> store.messages)
  const dispatch = useDispatch();
  const {path} = useRouteMatch();
  const [localStorage, setLocalStorage] = React.useState([]);

  const handleSelectedDateClick =()=>{
    dispatch(updateSelectedDate(date))
    history.push(`${path}/day`);
  }

  React.useEffect(()=>{
    setLocalStorage([]);
    const messagesDay = messages.find((el:any)=> el.id === date.getTime());
    const firstThreeMessagesDay = messagesDay && messagesDay.messages.filter((el:any)=> el !== null).slice(0,3);
    if(firstThreeMessagesDay) setLocalStorage(firstThreeMessagesDay);
  },[date, messages])
  
  return (
    <div className="month-list__day">
      <div
        className={`month-list__day-header ${
          isCurrentMonth
            ? "month-list__day-header_current"
            : "month-list__day-header_other"
        }`}
        onClick={handleSelectedDateClick}
      >
        <div className="month-list__day-number">{date.getDate()}</div>
      </div>
      <ul className="month-list__day-tasks">
      {localStorage.map((el:any, index:number)=> el && <li className="month-list__day-task">
      <h3 className="month-list__day-task-time">{getTimeInFormat(el.currentHour)}</h3>
      <p className="month-list__day-task-text">{el.message}</p>
        </li>)}
      </ul>
    </div>
  );
};

export default withRouter(DayOfTheWeek);
