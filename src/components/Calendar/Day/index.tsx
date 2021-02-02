import React from "react";
import { useSelector } from "react-redux";

import CardMessage from "../CardMessage";
import { IUserMessageData } from "../../../redux/messages/messagesActions";
import CardEmpty from "../CardEmpty";

const Day = (): JSX.Element => {
  const { idSelectedDate, selectedDate } = useSelector((store: any) => store.calendar);
  const { messages } = useSelector((store: any) => store.messages);
  const messagesTargetDay = messages.find((messagesDay: IUserMessageData) => messagesDay.id === idSelectedDate);

  return (
    <div className="day-list">
      <div className="day-list__header border_bottom">
        <div className="day-list__day-name">
          <span>{selectedDate.getDate()}</span>
        </div>
      </div>
      <div className="day-list__group">
        {messagesTargetDay &&
          messagesTargetDay.messages.map((message: any, index: number) =>
            message ? (
              <CardMessage key={index} message={message} />
            ) : (
              <CardEmpty key={index} currentHour={index} />
            )
          )}

        {!messagesTargetDay &&
          Array(24)
            .fill(null)
            .map((el, index) => <CardEmpty key={index} currentHour={index} />)}
      </div>
    </div>
  );
};

export default Day;
