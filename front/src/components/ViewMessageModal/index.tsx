import React from "react";
import { useSelector } from "react-redux";

import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import { IUserMessageData } from "../../redux/messages/messagesActions";

function ViewMessageModal(): JSX.Element {
  const { idSelectedDate, currentHour } = useSelector((store: any) => store.calendar);
  const { messages } = useSelector((store: any) => store.messages);
  const messagesTargetDay = messages.find((messagesDay: IUserMessageData) => messagesDay.id === idSelectedDate);

  return (
    <div className="view-message-card">
      <div className="view-message-card__header">
        <h3 className="view-message-card__date">
          Date: {getDateInFormat(idSelectedDate)}
          <br />
          <br />
          Time: {getTimeInFormat(currentHour)}
        </h3>
        <h3 className="view-message-card__author">
          {messagesTargetDay.messages[currentHour].email}
        </h3>
      </div>
      <h2 className="view-message-card__title">
        {messagesTargetDay.messages[currentHour].title}
      </h2>
      <p className="view-message-card__text">
        {messagesTargetDay.messages[currentHour].message}
      </p>
    </div>
  );
}

export default ViewMessageModal;
