import React from "react";
import { useSelector } from "react-redux";

import IStore from "../../redux/interfaceStore";
import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import { MessagesSpecificDateType, UserMessageDataType1 } from '../../types/messagesDataTypes';

function ViewMessageModal(): JSX.Element {
    // Не знаю как решить данную проблему, связанную с вариативностью типов messages
  const { idSelectedDate, currentHour } = useSelector((store: IStore) => store.calendar);
  const { messages } = useSelector((store: any) => store.messages);
  const { id } = useSelector((store: any) => store.auth.user);
  const targetMessage = messages.find((messagesDay: UserMessageDataType1) => messagesDay.dayId === idSelectedDate && messagesDay.currentHour === currentHour && messagesDay.userId === id);
  
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
          {targetMessage.email}
        </h3>
      </div>
      <h2 className="view-message-card__title">
        {targetMessage.title}
      </h2>
      <p className="view-message-card__text">
        {targetMessage.message}
      </p>
    </div>
  );
}

export default ViewMessageModal;
