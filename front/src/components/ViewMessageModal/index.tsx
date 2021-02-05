import React from "react";
import { useSelector } from "react-redux";

import IStore from "../../redux/interfaceStore";
import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import { MessagesSpecificDateType } from '../../types/messagesDataTypes';

function ViewMessageModal(): JSX.Element {
    // Не знаю как решить данную проблему, связанную с вариативностью типов messages
  const { idSelectedDate, currentHour } = useSelector((store: IStore) => store.calendar);
  const { messages } = useSelector((store: any) => store.messages);
  const messagesTargetDay = messages.find((messagesDay: MessagesSpecificDateType) => messagesDay.id === idSelectedDate);
  
  return (
    <div className="view-message-card">
      <div className="view-message-card__header">
        <h3 className="view-message-card__date">
          Date: {getDateInFormat(idSelectedDate!)}
          <br />
          <br />
          Time: {getTimeInFormat(currentHour!)}
        </h3>
        <h3 className="view-message-card__author">
          {messagesTargetDay.messages[currentHour!].email}
        </h3>
      </div>
      <h2 className="view-message-card__title">
        {messagesTargetDay.messages[currentHour!].title}
      </h2>
      <p className="view-message-card__text">
        {messagesTargetDay.messages[currentHour!].message}
      </p>
    </div>
  );
}

export default ViewMessageModal;
