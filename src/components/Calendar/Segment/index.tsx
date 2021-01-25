import React from "react";
import { useSelector } from "react-redux";
import SegmentGroup, { IGroupProps } from "./SegmentGroup";

function Segment() {
  const { isNoMessages, messages } = useSelector((store: any) => store.messages);

  return (
    <div className="segment">
      <div className="segment__header border_bottom">
        <h3 className="segment__header-title">Все заметки</h3>
        {!isNoMessages && (
          <div className="filter">
            <input className="filter__input" type="text" />
            <input className="filter__input" type="text" />
            <button className="filter__button">filter</button>
          </div>
        )}
      </div>
      {!isNoMessages && (
        <React.Fragment>
          {messages.map((group: IGroupProps, index: number) => (
            <SegmentGroup key={index} group={group} index={index} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Segment;

