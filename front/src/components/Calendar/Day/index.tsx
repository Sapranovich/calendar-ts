import React from "react";
import { useSelector } from "react-redux";

import IStore from "../../../redux/interfaceStore";
import CardMessage from "../CardMessage";
import { UserMessageDataType } from '../../../types/messagesDataTypes';
import getDateInFormat from '../../../services/getDateInFormat';
import { HOURS_DAY } from '../../../data';
import CardEmpty from "../CardEmpty";

const Day = (): JSX.Element => {
  const { idSelectedDate, selectedDate } = useSelector((store: IStore) => store.calendar);
  const { messages } = useSelector((store: IStore) => store.messages);
  const { id } = useSelector((store: IStore) => store.auth.user);
  const messagesTargetDay = messages.filter((messagesDay: UserMessageDataType) => messagesDay.dayId === idSelectedDate && messagesDay.userId === id);

  return (
    <div className="day-list">
      <div className="day-list__header border_bottom">
        <div className="day-list__day-name">
          {getDateInFormat(selectedDate!.getTime())}
        </div>
      </div>
      <div className="day-list__group">
        {Array(HOURS_DAY).fill(null).map((el, index: number) => {
          const message = messagesTargetDay.find(el=> el.currentHour === index);
          if(message) return <CardMessage key={index} messageData={message} />
          return <CardEmpty key={index} currentHour={index} />
        })}
      </div>
    </div>
  );
};

export default Day;
