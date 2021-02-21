import React from "react";

import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import useModalMessageObject from "../../hooks/useMessageObject";

function ViewMessageModal(): JSX.Element {

  const messageObject = useModalMessageObject();

  return (
    <div className="view-message-card">
      <div className="view-message-card__header">
        <h3 className="view-message-card__date">
          Date: {getDateInFormat(messageObject.dayId!)}
          <br />
          <br />
          Time: {getTimeInFormat(messageObject.currentHour!)}
        </h3>
        <h3 className="view-message-card__author">
          {messageObject.email}
        </h3>
      </div>
      <h2 className="view-message-card__title">
        {messageObject.title}
      </h2>
      <p className="view-message-card__text">
        {messageObject.message}
      </p>
    </div>
  );
}

export default ViewMessageModal;
