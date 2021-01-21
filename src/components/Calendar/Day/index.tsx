import React from "react";
import { useSelector } from "react-redux";
import CardMessage from "../CardMessage";
function Day({ isWeek }: { isWeek?: boolean }) {
  const { idSelectedDate, selectedDate } = useSelector(
    (store: any) => store.calendar
  );
  const { isNoMessages, isLoadedMessages, messages } = useSelector(
    (store: any) => store.messages
  );

  return (
    <div className="day-list">
      <div className="day-list__header border_bottom">
        <div className="day-list__day-name">
          <span>{selectedDate.getDate()}</span>
        </div>
      </div>
      <div className="day-list__group">
        {idSelectedDate in messages
          ? messages[idSelectedDate].map((data: any, index: number) => (
              <CardMessage />
            ))
          : Array(24)
              .fill(null)
              .map((data, index) => <CardMessage data={data} hour={index}/> )}
      </div>
    </div>
  );
}

export default Day;
