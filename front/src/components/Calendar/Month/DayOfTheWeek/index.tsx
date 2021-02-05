import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter, useRouteMatch } from "react-router-dom";

import IStore from "../../../../redux/interfaceStore";
import { UserMessageDataType, MessagesSpecificDateType } from '../../../../types/messagesDataTypes';
import { updateSelectedDate } from "../../../../redux/actions";
import { DayDataType } from "../../../../redux/calendar/calendarReducer";
import getTimeInFormat from "../../../../services/getTimeInFormat";

export interface DayOfTheWeekPropsType extends RouteComponentProps<any> {
  dayData: DayDataType;
}

const DayOfTheWeek = ({ history, dayData: { date, isCurrentMonth }}: DayOfTheWeekPropsType): JSX.Element => {
  const { messages } = useSelector((store: IStore) => store.messages);
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const [localStorage, setLocalStorage] = React.useState<(UserMessageDataType | null)[]>([]);

  React.useEffect(() => {
    setLocalStorage([]);
    const messagesDay = messages.find((el: MessagesSpecificDateType) => el.id === date.getTime());
    // Почему-то после фильтрации нужно всеравно предусматривать вариант с null...
    const firstThreeMessagesDay = messagesDay && messagesDay.messages.filter((el: UserMessageDataType | null) => el !== null).slice(0,3);
    if (firstThreeMessagesDay) setLocalStorage(firstThreeMessagesDay);
  }, [date, messages]);

  const handleSelectedDateClick = () => {
    dispatch(updateSelectedDate(date));
    history.push(`${path}/day`);
  };

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
        {localStorage.map(
          (el: UserMessageDataType | null, index: number) =>
            el && (
              <li key={index} className="month-list__day-task">
                <h3 className="month-list__day-task-time">
                  {getTimeInFormat(el.currentHour)}
                </h3>
                <p className="month-list__day-task-text">{el.message}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default withRouter(DayOfTheWeek);
